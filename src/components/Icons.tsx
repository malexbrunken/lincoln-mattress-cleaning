// Hand-drawn line icon set — clinical, no emoji.
const S = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const IconMattress = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <rect x="2.6" y="9" width="18.8" height="7.4" rx="2.2" />
    <path d="M6.2 9V6.4A2.4 2.4 0 0 1 8.6 4h6.8a2.4 2.4 0 0 1 2.4 2.4V9" />
    <path d="M7.5 13h3m3.5 0h3" />
    <path d="M2.6 16.4V18m18.8-1.6V18" />
  </svg>
);

export const IconSteam = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M5 18.5h9.5a3 3 0 0 0 3-3v-2.2" />
    <path d="M5 18.5v-6.2A3.3 3.3 0 0 1 8.3 9h3.2" />
    <path d="M17.5 13.3h2.4a1.6 1.6 0 0 0 0-3.2h-1.1" />
    <path d="M8 5.6c1-1 1-2.1 0-3.1" />
    <path d="M11.5 5.6c1-1 1-2.1 0-3.1" />
    <path d="M15 5.6c1-1 1-2.1 0-3.1" />
    <path d="M8.2 21.2h8" />
  </svg>
);

export const IconDroplet = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 3.2s6.2 6.4 6.2 11.2a6.2 6.2 0 0 1-12.4 0C5.8 9.6 12 3.2 12 3.2z" />
    <path d="M9.3 14a2.8 2.8 0 0 0 2.2 3" />
  </svg>
);

export const IconDropletSlash = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 3.2s6.2 6.4 6.2 11.2a6.2 6.2 0 0 1-12.4 0C5.8 9.6 12 3.2 12 3.2z" />
    <path d="M4 4l16 16" />
  </svg>
);

export const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 2.8l7.2 2.7v5.6c0 4.6-3 8.1-7.2 10.1-4.2-2-7.2-5.5-7.2-10.1V5.5L12 2.8z" />
    <path d="M8.8 11.7l2.3 2.3 4-4.2" />
  </svg>
);

export const IconUVC = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 3.4v3.2M5.9 6.5l2.3 2.3M18.1 6.5l-2.3 2.3M3.5 12.6h3.2M17.3 12.6h3.2" />
    <path d="M8.4 12.6h7.2l1.1 6.2H7.3z" />
  </svg>
);

export const IconGauge = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M3.6 17.4a9 9 0 1 1 16.8 0" />
    <path d="M12 17.4l4-5.4" />
    <circle cx="12" cy="17.6" r="1.1" />
  </svg>
);

export const IconThermometer = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M14 14.2V5.4a2 2 0 1 0-4 0v8.8a3.6 3.6 0 1 0 4 0z" />
    <path d="M12 17.4v-2.2" />
  </svg>
);

export const IconMapPin = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 21s-6.8-5.6-6.8-10.8A6.8 6.8 0 0 1 12 3.4a6.8 6.8 0 0 1 6.8 6.8C18.8 15.4 12 21 12 21z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const IconCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M4.5 12.6l5 5 10-11" />
  </svg>
);

export const IconLock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <rect x="4.6" y="10.4" width="14.8" height="10.2" rx="2.2" />
    <path d="M8.2 10.4V7.8a3.8 3.8 0 0 1 7.6 0v2.6" />
  </svg>
);

export const IconClipboard = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M9 4.6H7.4A1.6 1.6 0 0 0 5.8 6.2v13.2a1.6 1.6 0 0 0 1.6 1.6h9.2a1.6 1.6 0 0 0 1.6-1.6V6.2a1.6 1.6 0 0 0-1.6-1.6H15" />
    <rect x="9" y="2.8" width="6" height="3.6" rx="1.1" />
    <path d="M8.8 12h6.4M8.8 15.6h4.4" />
  </svg>
);

export const IconSun = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <circle cx="12" cy="12" r="3.6" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.4 19.6L6 18M18 6l1.6-1.6" />
  </svg>
);

export const IconSnow = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 2.8v18.4M4 7.4l16 9.2M20 7.4L4 16.6" />
  </svg>
);