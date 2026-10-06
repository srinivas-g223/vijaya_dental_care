interface LogoProps {
  className?: string;
}

/** Tooth logo + wordmark used in the navbar and footer. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="toothGrad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#56CFC2" />
            <stop offset="1" stopColor="#7DE0D4" />
          </linearGradient>
        </defs>
        <path
          d="M12 3.6c-1.9 0-2.5-1.1-4.4-1.1C4.9 2.5 3.3 4.4 3.3 7.2c0 3.9 1.4 5.4 2 8.7.4 2.3 1 5.1 2.4 5.1 1.7 0 1.4-3.4 2.5-5.1.5-.9 1-1.3 1.8-1.3s1.3.4 1.8 1.3c1.1 1.7.8 5.1 2.5 5.1 1.4 0 2-2.8 2.4-5.1.6-3.3 2-4.8 2-8.7 0-2.8-1.6-4.7-4.3-4.7-1.9 0-2.5 1.1-4.4 1.1Z"
          fill="url(#toothGrad)"
        />
      </svg>
      <span className="text-lg font-extrabold tracking-tight text-white">
        Vijaya <span className="text-aqua-light">Dental Care</span>
      </span>
    </span>
  );
}
