import Link from "next/link";
export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""} ${className}`}
      aria-label="Synora Legacy home"
    >
      <svg
        viewBox="0 0 48 52"
        fill="none"
        aria-hidden="true"
        className="brand-mark"
      >
        <path
          d="M24 2 44 10v17c0 11-12 19-20 23C16 46 4 38 4 27V10L24 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 10v30M15 37h18M15 20l9-8 9 8M14 28l10-9 10 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="brand-wordmark">
        <span>SYNORA</span>
        <span>LEGACY</span>
      </span>
    </Link>
  );
}
