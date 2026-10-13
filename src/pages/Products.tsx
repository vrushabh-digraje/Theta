import { FC, useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productsData } from '../data/segmentsData';
import type { ProductItem, SubCategoryCard } from '../data/segmentsData';

export const Products: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get('product');

  // Active view: 'all' or specific product id
  const [activeProductId, setActiveProductId] = useState<string>(productParam || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [selectedSubCardForModal, setSelectedSubCardForModal] = useState<SubCategoryCard | null>(null);
  const [rfqSubCard, setRfqSubCard] = useState<{ subCard: SubCategoryCard; parentTitle: string } | null>(null);
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);
  const [rfqSubmitted, setRfqSubmitted] = useState<boolean>(false);

  const handleCopySpecs = (subCard: SubCategoryCard) => {
    const specsText = `${subCard.name} [${subCard.badge}]\n${subCard.description}\n\nKey Specifications:\n${subCard.features.map((f) => `• ${f}`).join('\n')}`;
    navigator.clipboard.writeText(specsText).catch(() => {});
    setCopiedCardId(subCard.id);
    setTimeout(() => {
      setCopiedCardId((prev) => (prev === subCard.id ? null : prev));
    }, 2000);
  };

  // Sync state when URL parameter changes
  useEffect(() => {
    if (productParam && productsData.some((p) => p.id === productParam)) {
      setActiveProductId(productParam);
    } else if (!productParam) {
      setActiveProductId('all');
    }
  }, [productParam]);

  const handleSelectProduct = (id: string) => {
    setActiveProductId(id);
    if (id === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ product: id });
    }
  };

  const selectedProduct = useMemo(() => {
    return productsData.find((p) => p.id === activeProductId);
  }, [activeProductId]);

  // Filtered sub-category cards when a specific product is open
  const filteredSubCategories = useMemo(() => {
    if (!selectedProduct) return [];
    if (!searchQuery.trim()) return selectedProduct.subCategoryCards;
    const q = searchQuery.toLowerCase().trim();
    return selectedProduct.subCategoryCards.filter(
      (sub) =>
        sub.name.toLowerCase().includes(q) ||
        sub.description.toLowerCase().includes(q) ||
        sub.features.some((f) => f.toLowerCase().includes(q))
    );
  }, [selectedProduct, searchQuery]);

  // Filtered products list when 'all' is selected
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return productsData;
    const q = searchQuery.toLowerCase().trim();
    return productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subCategories.some((sub) => sub.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="w-full pb-20">
      {/* Top Hero Banner */}
      <section className="bg-surface border-b border-outline-variant/15 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-3">
                <span className="material-symbols-outlined text-secondary text-[16px]">inventory_2</span>
                <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
                  Segment Catalog • Hardware & Equipment
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
                {selectedProduct ? selectedProduct.name : 'Industrial Products & Systems'}
              </h1>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {selectedProduct
                  ? selectedProduct.description
                  : 'Explore THETA Controls’ high-reliability industrial hardware lines. Select any product below to open its complete sub-categories in full card format.'}
              </p>
            </div>

            {/* Quick Switch to Solutions */}
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-container border border-outline-variant/20 hover:border-secondary hover:text-secondary text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 shadow-xs"
            >
              <span>Explore Turnkey Solutions</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>


          {/* Search Box & Controls */}
          <div className="mt-8 pt-6 border-t border-outline-variant/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input
                type="text"
                placeholder={
                  selectedProduct
                    ? `Search sub-categories inside ${selectedProduct.name}...`
                    : 'Search all products or sub-categories...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            <span className="font-body text-xs text-outline uppercase tracking-wider hidden sm:inline">
              11 Industrial Hardware Lines
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin pt-10">
        {/* VIEW 1: SPECIFIC PRODUCT SELECTED -> SUB-CATEGORIES OPENED IN FULL CARD FORMAT */}
        {selectedProduct ? (
          <div>
            {/* Active Product Title & Sub-Categories Count Banner */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-xs p-5 sm:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[26px]">{selectedProduct.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-0.5 rounded-xs">
                      {selectedProduct.category}
                    </span>
                    <span className="bg-secondary/15 text-secondary text-[10px] font-bold uppercase px-2 py-0.5 rounded-xs">
                      {selectedProduct.subCategoryCards.length} Sub-Categories Available
                    </span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-primary">
                    {selectedProduct.name}
                  </h2>
                  <p className="font-body text-xs text-on-surface-variant mt-1">
                    {selectedProduct.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to={selectedProduct.link}
                  className="px-3.5 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  Division Info
                </Link>
                <Link
                  to={`/contact?subject=Inquiry regarding ${selectedProduct.name}`}
                  className="px-4 py-2 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Sub-Categories In Card Format Grid */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-outline flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">view_module</span>
                <span>
                  Sub-Category Cards ({filteredSubCategories.length} of {selectedProduct.subCategoryCards.length})
                </span>
              </h3>
              <span className="font-body text-[11px] text-outline">
                Card Format View
              </span>
            </div>

            {filteredSubCategories.length === 0 ? (
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xs p-10 text-center">
                <span className="material-symbols-outlined text-outline text-4xl mb-2">search_off</span>
                <p className="font-body text-xs text-on-surface-variant">No sub-categories match your search query.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-3 py-1.5 bg-secondary text-white font-body text-xs font-bold uppercase rounded-xs cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubCategories.map((subCard, idx) => (
                  <div
                    key={subCard.id || idx}
                    className="bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group relative"
                  >
                    {/* Card Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-surface-container-low">
                      <img
                        src={subCard.image}
                        alt={subCard.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => setSelectedSubCardForModal(subCard)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Capability Badge Pill */}
                      <span className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold font-body uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs flex items-center gap-1.5 backdrop-blur-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {subCard.badge}
                      </span>

                      {/* Quick Zoom / Lightbox Trigger */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSubCardForModal(subCard);
                        }}
                        title="Zoom & Preview Specifications"
                        className="absolute top-3 right-3 w-8 h-8 rounded-xs bg-black/60 hover:bg-secondary text-white backdrop-blur-xs flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                      >
                        <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                      </button>

                      {/* Bottom Bar on Image: Floating Icon Badge & Index */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xs bg-primary text-white flex items-center justify-center shadow-md border border-white/20 group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 pointer-events-auto">
                            <span className="material-symbols-outlined text-[20px]">{subCard.icon || 'settings'}</span>
                          </div>
                          <span className="font-body text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">
                            Sub-Category #{idx + 1}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/75 font-body uppercase tracking-wider drop-shadow-sm">
                          {selectedProduct.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 flex-grow flex flex-col">
                      <h4
                        onClick={() => setSelectedSubCardForModal(subCard)}
                        className="font-display text-base font-bold text-primary group-hover:text-secondary transition-colors leading-snug cursor-pointer mb-2"
                      >
                        {subCard.name}
                      </h4>

                      <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4 flex-grow">
                        {subCard.description}
                      </p>

                      {/* Features / Specifications Bullet Points */}
                      {subCard.features && subCard.features.length > 0 && (
                        <div className="mb-4 pt-3 border-t border-outline-variant/15">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider">
                              Key Specifications:
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopySpecs(subCard)}
                              className="text-[10px] font-bold text-secondary hover:text-primary flex items-center gap-1 transition-colors cursor-pointer"
                              title="Copy specs to clipboard"
                            >
                              <span className="material-symbols-outlined text-[13px]">
                                {copiedCardId === subCard.id ? 'check' : 'content_copy'}
                              </span>
                              <span>{copiedCardId === subCard.id ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <ul className="space-y-1.5">
                            {subCard.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 text-[11px] font-medium text-on-surface">
                                <span className="material-symbols-outlined text-secondary text-[14px] mt-0.5 shrink-0">
                                  check_circle
                                </span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Card Actions */}
                      <div className="mt-auto pt-3 border-t border-outline-variant/15 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedSubCardForModal(subCard)}
                          className="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container text-primary font-body text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px] text-secondary">visibility</span>
                          <span>Preview</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setRfqSubmitted(false);
                            setRfqSubCard({ subCard, parentTitle: selectedProduct.name });
                          }}
                          className="px-3.5 py-1.5 bg-primary hover:bg-secondary text-white font-body text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                        >
                          <span>Inquire / RFQ</span>
                          <span className="material-symbols-outlined text-[14px]">mail</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* VIEW 2: ALL PRODUCTS OVERVIEW -> CARDS WITH SUB-CATEGORY CARDS PREVIEW & MODAL TRIGGERS */
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="font-body text-xs text-outline uppercase tracking-wider">
                Showing <span className="font-bold text-primary">{filteredProducts.length}</span> Products • Click any product to open sub-categories in card format
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => {
                const subCardCount = product.subCategoryCards.length;

                return (
                  <div
                    key={product.id}
                    className="bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary/50 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
                  >
                    {/* Card Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-surface-container-low">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      <span className="absolute top-3 left-3 bg-primary/90 backdrop-blur-xs text-white text-[10px] font-bold font-body uppercase tracking-wider px-2.5 py-1 rounded-xs">
                        {product.category}
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xs bg-secondary text-white flex items-center justify-center shadow-xs">
                            <span className="material-symbols-outlined text-[18px]">{product.icon}</span>
                          </div>
                          <span className="text-white/95 font-body text-xs font-bold drop-shadow-sm truncate">
                            {product.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-display text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                        {product.name}
                      </h3>
                      <p className="font-body text-xs font-semibold text-secondary mb-2">
                        {product.tagline}
                      </p>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Sub-Category Cards Preview / Open Trigger */}
                      <div className="mt-auto pt-3 border-t border-outline-variant/15">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="font-body text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[15px] text-secondary">grid_view</span>
                            Sub-Categories ({subCardCount})
                          </span>

                          {/* Primary CTA: Open Sub-Categories in Card Format */}
                          <button
                            onClick={() => handleSelectProduct(product.id)}
                            className="font-body text-[10px] font-bold text-secondary uppercase hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>Open Cards View</span>
                            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                          </button>
                        </div>

                        {/* Mini Sub-Category Cards Grid inside the parent card */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {product.subCategoryCards.slice(0, 4).map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => setSelectedSubCardForModal(sub)}
                              className="text-left p-2 rounded-xs bg-surface-container-low hover:bg-surface-container border border-outline-variant/15 hover:border-secondary/50 transition-all group/mini cursor-pointer flex items-center gap-2.5 shadow-2xs"
                              title={`Preview ${sub.name}`}
                            >
                              <div className="w-10 h-10 rounded-xs overflow-hidden shrink-0 bg-surface-container relative">
                                <img
                                  src={sub.image}
                                  alt={sub.name}
                                  className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1">
                                  <span className="material-symbols-outlined text-secondary text-[12px] shrink-0">
                                    {sub.icon || 'arrow_right'}
                                  </span>
                                  <span className="text-[10px] font-bold text-primary group-hover/mini:text-secondary truncate block">
                                    {sub.name}
                                  </span>
                                </div>
                                <span className="text-[9px] text-secondary font-semibold uppercase tracking-wider truncate block">
                                  {sub.badge}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>

                        {subCardCount > 4 && (
                          <button
                            onClick={() => handleSelectProduct(product.id)}
                            className="w-full py-1.5 bg-surface-container hover:bg-secondary hover:text-white text-secondary font-body text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors text-center cursor-pointer block"
                          >
                            + View all {subCardCount} Sub-Categories in Card Format
                          </button>
                        )}
                      </div>

                      {/* Card Bottom Actions */}
                      <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
                        <button
                          onClick={() => handleSelectProduct(product.id)}
                          className="flex items-center gap-1 font-body text-xs font-bold text-secondary hover:text-primary uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          <span>Open Sub-Categories</span>
                          <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                        </button>

                        <button
                          onClick={() => setModalProduct(product)}
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-xs bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant transition-colors cursor-pointer"
                          title="Quick preview cards"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* QUICK VIEW MODAL DIALOG (Opens Sub-Categories in Card Format) */}
      {modalProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 fade-in"
          onClick={() => setModalProduct(null)}
        >
          <div 
            className="bg-surface-container-lowest max-w-4xl w-full max-h-[90vh] rounded-xs shadow-2xl border border-outline-variant/20 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-outline-variant/15 flex items-center justify-between bg-surface-container-low">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-secondary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">{modalProduct.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">
                    {modalProduct.name}
                  </h3>
                  <p className="font-body text-xs text-outline">
                    {modalProduct.subCategoryCards.length} Sub-Categories (Card Format)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    handleSelectProduct(modalProduct.id);
                    setModalProduct(null);
                  }}
                  className="px-3 py-1.5 bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer hover:bg-primary transition-colors"
                >
                  Full Page Cards View
                </button>
                <button
                  onClick={() => setModalProduct(null)}
                  className="p-1.5 text-outline hover:text-primary cursor-pointer"
                  aria-label="Close dialog"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable Sub-Category Cards */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modalProduct.subCategoryCards.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-low border border-outline-variant/20 hover:border-secondary/60 rounded-xs overflow-hidden flex flex-col justify-between group transition-all"
                  >
                    <div className="relative h-32 w-full overflow-hidden bg-surface-container">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="absolute top-2 left-2 bg-secondary text-white text-[9px] font-bold font-body uppercase tracking-wider px-2 py-0.5 rounded-xs">
                        {sub.badge}
                      </span>
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-xs bg-primary text-white flex items-center justify-center shadow-xs">
                            <span className="material-symbols-outlined text-[16px]">{sub.icon || 'category'}</span>
                          </div>
                          <span className="text-white font-body text-xs font-bold drop-shadow-sm truncate">
                            {sub.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex-grow flex flex-col">
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-3">
                        {sub.description}
                      </p>
                      {sub.features && (
                        <ul className="space-y-1 mb-4 flex-grow">
                          {sub.features.map((f, fi) => (
                            <li key={fi} className="text-[10px] font-medium text-on-surface flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-secondary text-[12px] shrink-0">check</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="pt-2 border-t border-outline-variant/15 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            setModalProduct(null);
                            setSelectedSubCardForModal(sub);
                          }}
                          className="text-[10px] font-bold text-outline hover:text-primary uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                          <span>Zoom Specs</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setModalProduct(null);
                            setRfqSubmitted(false);
                            setRfqSubCard({ subCard: sub, parentTitle: modalProduct.name });
                          }}
                          className="px-2.5 py-1 bg-secondary text-white font-body text-[10px] font-bold uppercase tracking-wider rounded-xs hover:bg-primary transition-colors cursor-pointer"
                        >
                          Inquire / RFQ
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE LIGHTBOX & SPECIFICATIONS DETAIL MODAL */}
      {selectedSubCardForModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 fade-in"
          onClick={() => setSelectedSubCardForModal(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-3xl w-full max-h-[90vh] rounded-xs shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black shrink-0">
              <img
                src={selectedSubCardForModal.image}
                alt={selectedSubCardForModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              <span className="absolute top-4 left-4 bg-secondary text-white text-[11px] font-bold font-body uppercase tracking-wider px-3 py-1 rounded-xs shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {selectedSubCardForModal.badge}
              </span>

              <button
                type="button"
                onClick={() => setSelectedSubCardForModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xs bg-black/60 hover:bg-secondary text-white backdrop-blur-xs flex items-center justify-center transition-colors cursor-pointer shadow-md"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xs bg-primary text-white flex items-center justify-center shadow-lg border border-white/20">
                    <span className="material-symbols-outlined text-[26px]">
                      {selectedSubCardForModal.icon || 'settings'}
                    </span>
                  </div>
                  <div>
                    <span className="text-secondary-fixed text-xs font-body font-bold uppercase tracking-widest block drop-shadow-sm">
                      Sub-Category Specification Detail
                    </span>
                    <h3 className="text-white font-display text-xl sm:text-2xl font-bold drop-shadow-md">
                      {selectedSubCardForModal.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="font-body text-xs font-bold uppercase tracking-wider text-outline mb-2">
                  Technical Description
                </h4>
                <p className="font-body text-sm text-primary leading-relaxed">
                  {selectedSubCardForModal.description}
                </p>
              </div>

              {selectedSubCardForModal.features && selectedSubCardForModal.features.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-body text-xs font-bold uppercase tracking-wider text-outline">
                      Engineering Specifications & Highlights ({selectedSubCardForModal.features.length})
                    </h4>
                    <button
                      type="button"
                      onClick={() => handleCopySpecs(selectedSubCardForModal)}
                      className="text-xs font-bold text-secondary hover:text-primary flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {copiedCardId === selectedSubCardForModal.id ? 'check' : 'content_copy'}
                      </span>
                      <span>{copiedCardId === selectedSubCardForModal.id ? 'Copied Specs!' : 'Copy Specs'}</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSubCardForModal.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 bg-surface-container-low rounded-xs border border-outline-variant/15 flex items-start gap-2.5"
                      >
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                          verified
                        </span>
                        <span className="font-body text-xs text-on-surface font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-outline-variant/15 bg-surface-container-low flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleCopySpecs(selectedSubCardForModal)}
                className="px-3.5 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">
                  {copiedCardId === selectedSubCardForModal.id ? 'check' : 'content_copy'}
                </span>
                <span>{copiedCardId === selectedSubCardForModal.id ? 'Copied to Clipboard' : 'Copy All Specs'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSubCardForModal(null)}
                  className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const targetSub = selectedSubCardForModal;
                    setSelectedSubCardForModal(null);
                    setRfqSubmitted(false);
                    setRfqSubCard({
                      subCard: targetSub,
                      parentTitle: selectedProduct?.name || 'Industrial Products',
                    });
                  }}
                  className="px-5 py-2 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Request Quote (RFQ)</span>
                  <span className="material-symbols-outlined text-[15px]">mail</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE QUICK RFQ / QUOTATION MODAL */}
      {rfqSubCard && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 fade-in"
          onClick={() => setRfqSubCard(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-xl w-full rounded-xs shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* RFQ Header */}
            <div className="p-5 border-b border-outline-variant/15 bg-surface-container-low flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{rfqSubCard.subCard.icon || 'mail'}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-primary">
                    Request Quotation (RFQ)
                  </h3>
                  <span className="text-[11px] text-outline font-body block truncate max-w-xs sm:max-w-md">
                    {rfqSubCard.subCard.name} • {rfqSubCard.parentTitle}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setRfqSubCard(null)}
                className="p-1.5 text-outline hover:text-primary cursor-pointer"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* RFQ Body */}
            <div className="p-6">
              {rfqSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-primary mb-2">
                    Quotation Request Received!
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-6">
                    Our technical sales team for <span className="font-bold text-primary">{rfqSubCard.subCard.name}</span> will review your specifications and contact you within 24 business hours.
                  </p>
                  <div className="p-3 bg-surface-container-low rounded-xs border border-outline-variant/20 max-w-sm mx-auto mb-6 text-left">
                    <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-wider block mb-1">
                      Direct Pune Facility Contacts:
                    </span>
                    <p className="font-body text-xs text-primary font-medium">sales@thetacontrols.com</p>
                    <p className="font-body text-xs text-outline">+91 (20) 2426-3000 / +91 (20) 2427-4000</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRfqSubCard(null)}
                    className="px-6 py-2 bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-primary transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRfqSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="p-3 bg-surface-container-low rounded-xs border border-outline-variant/15 flex items-center gap-3">
                    <img
                      src={rfqSubCard.subCard.image}
                      alt={rfqSubCard.subCard.name}
                      className="w-14 h-14 object-cover rounded-xs shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">
                        Selected Sub-Category
                      </span>
                      <p className="font-display text-xs font-bold text-primary truncate">
                        {rfqSubCard.subCard.name}
                      </p>
                      <span className="text-[10px] text-outline block">
                        Capability: {rfqSubCard.subCard.badge}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. r.sharma@company.com"
                        className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Defence Lab / Automotive OEM"
                        className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Project Requirements & Quantity
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify project parameters, operating environment, target delivery timeline, or questions..."
                      className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Link
                      to={`/contact?subject=RFQ for ${rfqSubCard.subCard.name}`}
                      onClick={() => setRfqSubCard(null)}
                      className="font-body text-[11px] font-bold text-outline hover:text-primary uppercase tracking-wider"
                    >
                      Open Full Contact Page →
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setRfqSubCard(null)}
                        className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-xs"
                      >
                        Submit RFQ
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Cross-Link Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="bg-gradient-to-r from-primary to-[#002d5a] rounded-xs p-6 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest block mb-2">
              Turnkey Engineering & Testing
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              Need Turnkey Systems, DAQ or EOL Test Solutions?
            </h3>
            <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
              Explore our comprehensive Solutions segment including National Instruments DAQ rigs, automated test benches, and custom control panel manufacturing.
            </p>
          </div>
          <Link
            to="/solutions"
            className="px-6 py-3 bg-secondary hover:bg-white hover:text-primary text-white font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xs shrink-0 shadow-md"
          >
            Explore Solutions Segment →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
