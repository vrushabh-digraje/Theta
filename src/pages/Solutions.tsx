import { FC, useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { solutionsData } from '../data/segmentsData';
import type { SolutionItem, SubCategoryCard } from '../data/segmentsData';
import niLogo from '../assets/images/ni.png';

export const Solutions: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const solutionParam = searchParams.get('solution');

  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionParam || 'all');
  const [_modalSolution, _setModalSolution] = useState<SolutionItem | null>(null);
  const [selectedSubCardForModal, setSelectedSubCardForModal] = useState<SubCategoryCard | null>(null);
  const [rfqSubCard, setRfqSubCard] = useState<{ subCard: SubCategoryCard; parentTitle: string } | null>(null);
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);
  const [rfqSubmitted, setRfqSubmitted] = useState<boolean>(false);

  const handleCopySpecs = (subCard: SubCategoryCard) => {
    const specsText = `${subCard.name} [${subCard.badge}]\n${subCard.description}\n\nDeliverables & Features:\n${subCard.features.map((f) => `• ${f}`).join('\n')}`;
    navigator.clipboard.writeText(specsText).catch(() => {});
    setCopiedCardId(subCard.id);
    setTimeout(() => {
      setCopiedCardId((prev) => (prev === subCard.id ? null : prev));
    }, 2000);
  };

  useEffect(() => {
    if (solutionParam && solutionsData.some((s) => s.id === solutionParam)) {
      setActiveSolutionId(solutionParam);
    } else if (!solutionParam) {
      setActiveSolutionId('all');
    }
  }, [solutionParam]);

  const handleSelectSolution = (id: string) => {
    setActiveSolutionId(id);
    if (id === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ solution: id });
    }
  };

  const selectedSolution = useMemo(() => {
    return solutionsData.find((s) => s.id === activeSolutionId);
  }, [activeSolutionId]);

  return (
    <div className="w-full pb-20">
      {/* Page Header / Hero Banner */}
      <section className="bg-surface border-b border-outline-variant/15 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-3">
                <span className="material-symbols-outlined text-secondary text-[16px]">settings_suggest</span>
                <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
                  Segment Engineering • Turnkey Solutions & Systems
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
                {selectedSolution ? selectedSolution.name : 'Turnkey Engineering & Test Solutions'}
              </h1>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {selectedSolution
                  ? selectedSolution.description
                  : 'Theta Controls delivers mission-critical test fixtures, automated DAQ systems, bespoke control panels, and high-throughput End-of-Line testing rigs backed by certified National Instruments alliance partnership.'}
              </p>
            </div>

            {/* NI Silver Alliance Partner Card */}
            <div className="bg-surface-container-lowest border border-secondary/30 p-4 rounded-xs shadow-xs flex items-center gap-4 shrink-0">
              <img src={niLogo} alt="National Instruments Partner" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-widest block">
                  Official Partnership
                </span>
                <span className="font-body text-xs font-bold text-primary block">
                  Silver Alliance Partner
                </span>
                <span className="font-body text-[10px] text-outline block">
                  Certified LabVIEW & CompactRIO Architects
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Solutions Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin pt-10">
        {/* VIEW 1: SPECIFIC SOLUTION SELECTED -> SUB-CATEGORIES OPENED IN CARD FORMAT */}
        {selectedSolution ? (
          <div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-xs p-5 sm:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[26px]">{selectedSolution.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-0.5 rounded-xs">
                      {selectedSolution.category}
                    </span>
                    <span className="bg-secondary/15 text-secondary text-[10px] font-bold uppercase px-2 py-0.5 rounded-xs">
                      {selectedSolution.subCategoryCards.length} Sub-Categories Available
                    </span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-primary">
                    {selectedSolution.name}
                  </h2>
                  <p className="font-body text-xs text-on-surface-variant mt-1">
                    {selectedSolution.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleSelectSolution('all')}
                  className="px-3.5 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  All Solutions
                </button>
                <Link
                  to={`/contact?subject=Engineering Consultation for ${selectedSolution.name}`}
                  className="px-4 py-2 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
                >
                  Consult Engineers
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-outline flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">view_module</span>
                <span>Sub-Categories in Card Format ({selectedSolution.subCategoryCards.length})</span>
              </h3>
            </div>

            {/* Sub-Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedSolution.subCategoryCards.map((subCard, idx) => (
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
                      title="Zoom & Preview Deliverables"
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
                          Capability #{idx + 1}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/75 font-body uppercase tracking-wider drop-shadow-sm">
                        {selectedSolution.category}
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

                    {/* Deliverables / Specifications Bullet Points */}
                    {subCard.features && subCard.features.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-outline-variant/15">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider">
                            Deliverables & Capabilities:
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopySpecs(subCard)}
                            className="text-[10px] font-bold text-secondary hover:text-primary flex items-center gap-1 transition-colors cursor-pointer"
                            title="Copy capabilities to clipboard"
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
                          setRfqSubCard({ subCard, parentTitle: selectedSolution.name });
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
          </div>
        ) : (
          /* VIEW 2: ALL SOLUTIONS OVERVIEW -> CARDS WITH SUB-CATEGORY CARDS EMBEDDED */
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="font-body text-xs text-outline uppercase tracking-wider">
                Showing <span className="font-bold text-primary">{solutionsData.length}</span> Engineering Solutions • Click any solution to open its sub-categories in card format
              </p>
              <Link
                to="/products"
                className="flex items-center gap-1.5 font-body text-xs font-bold text-secondary hover:text-primary uppercase tracking-wider transition-colors"
              >
                <span>Browse Products Catalog (11)</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutionsData.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary/50 rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Card Header Banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-surface-container-low">
                    <img
                      src={solution.image}
                      alt={solution.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold font-body uppercase tracking-wider px-3 py-1 rounded-xs shadow-xs">
                      {solution.category}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xs bg-primary text-white flex items-center justify-center shadow-md border border-white/20">
                          <span className="material-symbols-outlined text-[22px]">{solution.icon}</span>
                        </div>
                        <div>
                          <h2 className="text-white font-display text-xl font-bold drop-shadow-sm">
                            {solution.name}
                          </h2>
                          <span className="text-secondary-fixed text-xs font-body font-medium drop-shadow-sm">
                            {solution.tagline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    {/* Sub-Category Cards Section */}
                    <div className="mb-4 pt-3 border-t border-outline-variant/15">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-body text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">account_tree</span>
                          <span>Sub-Categories in Card Format ({solution.subCategoryCards.length})</span>
                        </span>
                        <button
                          onClick={() => handleSelectSolution(solution.id)}
                          className="font-body text-[10px] font-bold text-secondary uppercase hover:underline flex items-center gap-0.5 cursor-pointer"
                        >
                          <span>Open Full Cards View</span>
                          <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                        </button>
                      </div>

                      {/* Mini Sub-Category Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {solution.subCategoryCards.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => setSelectedSubCardForModal(sub)}
                            className="text-left p-2 rounded-xs bg-surface-container-low hover:bg-surface-container border border-outline-variant/15 hover:border-secondary/50 transition-all cursor-pointer group/mini flex items-center gap-2.5 shadow-2xs"
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
                                  {sub.icon || 'check_circle'}
                                </span>
                                <span className="font-body text-xs font-bold text-primary group-hover/mini:text-secondary transition-colors block leading-tight truncate">
                                  {sub.name}
                                </span>
                              </div>
                              <span className="text-[9px] text-secondary font-semibold uppercase tracking-wider truncate block mt-0.5">
                                {sub.badge}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Links */}
                    <div className="mt-auto pt-4 border-t border-outline-variant/15 flex items-center justify-between">
                      <button
                        onClick={() => handleSelectSolution(solution.id)}
                        className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-secondary hover:text-primary uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Open Sub-Category Cards</span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          open_in_new
                        </span>
                      </button>

                      <Link
                        to={`/contact?subject=Engineering Consultation for ${solution.name}`}
                        className="px-4 py-2 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-xs"
                      >
                        Consult Engineers
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* INTERACTIVE LIGHTBOX & CAPABILITY DETAIL MODAL */}
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
                      Solution Capability Detail
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
                  Engineering Scope & Overview
                </h4>
                <p className="font-body text-sm text-primary leading-relaxed">
                  {selectedSubCardForModal.description}
                </p>
              </div>

              {selectedSubCardForModal.features && selectedSubCardForModal.features.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-body text-xs font-bold uppercase tracking-wider text-outline">
                      Engineering Deliverables & Highlights ({selectedSubCardForModal.features.length})
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
                      parentTitle: selectedSolution?.name || 'Turnkey Solutions',
                    });
                  }}
                  className="px-5 py-2 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Request Engineering Consultation</span>
                  <span className="material-symbols-outlined text-[15px]">mail</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE QUICK RFQ / CONSULTATION MODAL */}
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
                  <span className="material-symbols-outlined text-[20px]">{rfqSubCard.subCard.icon || 'engineering'}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-primary">
                    Engineering Consultation / RFQ
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
                    Consultation Request Received!
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-6">
                    Our chief systems engineering team for <span className="font-bold text-primary">{rfqSubCard.subCard.name}</span> will review your system specifications and connect with you within 24 business hours.
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
                        Selected System Capability
                      </span>
                      <p className="font-display text-xs font-bold text-primary truncate">
                        {rfqSubCard.subCard.name}
                      </p>
                      <span className="text-[10px] text-outline block">
                        Deliverable Badge: {rfqSubCard.subCard.badge}
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
                        placeholder="e.g. Anand Kulkarni"
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
                        placeholder="e.g. a.kulkarni@enterprise.com"
                        className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Organization / Defense Lab
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. DRDO / Automotive Testing Lab"
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
                      System Scope & FAT Timeline
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe target test stand parameters, sensor channels, DAQ sample rates, or compliance requirements..."
                      className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Link
                      to={`/contact?subject=Consultation for ${rfqSubCard.subCard.name}`}
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
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Engineering Assurance Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-primary mb-1">
                  NI Silver Alliance Partner
                </h4>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Certified LabVIEW and TestStand architects ensuring rigorous hardware-software integration for complex automated test stands.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">engineering</span>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-primary mb-1">
                  In-House Manufacturing & FAT
                </h4>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Full control panel fabrication, wire harnessing, and Factory Acceptance Testing (FAT) performed at our Satara Road facility in Pune.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">military_tech</span>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-primary mb-1">
                  DRDO & Strategic Defence Track Record
                </h4>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Proven reliability in ruggedized electronic modules for mission-critical strategic defense equipment and robotic platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
