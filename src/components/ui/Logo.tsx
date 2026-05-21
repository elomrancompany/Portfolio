import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 select-none ${className}`}>
      {/* Immersive 3D/Geometric SVG Logo Mark */}
      <div className="relative w-12 h-12 flex-shrink-0 group">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-out"
        >
          {/* Left Column (Tallest, Navy) */}
          <path
            d="M25 75V25L40 15V65L25 75Z"
            fill="#0D1B2A"
            stroke="#C49A5A"
            strokeWidth="1.5"
            className="transition-colors duration-300 group-hover:fill-[#1A3A5C]"
          />
          {/* Middle Column (Medium, Navy) */}
          <path
            d="M45 80V35L60 25V70L45 80Z"
            fill="#0D1B2A"
            stroke="#C49A5A"
            strokeWidth="1.5"
            className="transition-colors duration-300 group-hover:fill-[#1A3A5C]"
          />
          {/* Right Column (Shortest, Gold) */}
          <path
            d="M65 85V45L80 35V75L65 85Z"
            fill="#C49A5A"
            className="transition-colors duration-300 group-hover:fill-[#D4B07A]"
          />
          {/* Horizontal connecting base accents */}
          <path
            d="M20 78L80 88"
            stroke="#C49A5A"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
        {/* Subtle glow effect behind the logo */}
        <div className="absolute -inset-1 bg-gold/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {showText && (
        <div className="flex flex-col text-right">
          <span className="text-lg font-bold leading-tight tracking-wide text-white font-heading">
            EL OMRAN
          </span>
          <span className="text-[10px] font-bold tracking-[0.18em] text-gold uppercase -mt-0.5">
            GENERAL CONTRACTING
          </span>
          <span className="text-[9px] font-semibold text-cream/70 mt-0.5 leading-none">
            {SITE.name}
          </span>
        </div>
      )}
    </Link>
  );
}
