import React from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "right" | "center" | "left";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "right",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses = {
    right: "text-right items-start",
    center: "text-center items-center mx-auto",
    left: "text-left items-end",
  };

  const lineAlignmentClasses = {
    right: "right-0 origin-right",
    center: "left-1/2 -translate-x-1/2 origin-center",
    left: "left-0 origin-left",
  };

  return (
    <ScrollReveal
      direction="up"
      className={`flex flex-col mb-12 sm:mb-16 max-w-3xl ${alignmentClasses[align]} ${className}`}
    >
      <span className="section-label flex items-center gap-2">
        {label}
      </span>
      <h2 className="section-title text-white font-bold mb-4 relative pb-4">
        {title}
        <span className={`absolute bottom-0 h-[3px] w-16 bg-gold-gradient rounded-full ${lineAlignmentClasses[align]}`} />
      </h2>
      {subtitle && (
        <p className="section-subtitle mt-2 text-cream/80 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
