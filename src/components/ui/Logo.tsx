import { SITE } from "@/lib/data";

export default function Logo({ size = 52 }: { size?: number }) {
  return (
    <a href="#" className="flex items-center gap-3.5 no-underline">
      <div style={{ width: size, height: size }} className="flex-shrink-0">
        <svg
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
        >
          <rect width="52" height="52" rx="8" fill="#071B2A" />
          <rect
            x="0.5"
            y="0.5"
            width="51"
            height="51"
            rx="7.5"
            stroke="#C9A15A"
            strokeOpacity="0.5"
          />
          {/* Main building */}
          <path d="M26 8L17 17V44H21V31H31V44H35V17L26 8Z" fill="#C9A15A" />
          {/* Window */}
          <path d="M22 20H30V29H22V20Z" fill="#071B2A" />
          {/* Side pillars */}
          <path d="M13 22H17V44H13V22Z" fill="#C9A15A" opacity="0.45" />
          <path d="M35 22H39V44H35V22Z" fill="#C9A15A" opacity="0.45" />
          {/* Gold accent line */}
          <path d="M13 44H39" stroke="#C9A15A" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-bold text-soft-white">{SITE.name}</div>
        <div className="text-[10px] font-medium text-gold tracking-widest uppercase">
          {SITE.nameEn}
        </div>
      </div>
    </a>
  );
}
