import type React from 'react';

/**
 * Smart Email Click Handler:
 * - On Mobile: Uses native mailto: protocol which directly opens the device's default mail app (e.g. Gmail / Apple Mail).
 * - On Laptop / Desktop: Intercepts the click and opens Gmail web compose in a new tab
 *   (https://mail.google.com/mail/?view=cm&fs=1&to=...) so users without Outlook or local mail clients
 *   can seamlessly send an email without encountering dead mailto: links.
 */
export const handleSmartEmailClick = (email: string, e?: React.MouseEvent) => {
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (!isMobile) {
    if (e) {
      e.preventDefault();
    }
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, '_blank', 'noopener,noreferrer');
  }
};
