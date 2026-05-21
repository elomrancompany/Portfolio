"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountUpStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  subLabel?: string;
  className?: string;
}

export default function CountUpStat({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2.5,
  label,
  subLabel,
  className = "",
}: CountUpStatProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`stat-card flex flex-col justify-center items-center ${className}`}>
      <span className="stat-value text-gradient-gold block font-bold tracking-tight">
        {prefix}
        {inView ? (
          <CountUp
            end={end}
            duration={duration}
            decimals={decimals}
            separator=","
          />
        ) : (
          "0"
        )}
        {suffix}
      </span>
      <span className="stat-label text-white/90 text-base font-semibold mt-2 block">
        {label}
      </span>
      {subLabel && (
        <span className="text-xs text-cream/60 mt-1 block font-medium">
          {subLabel}
        </span>
      )}
    </div>
  );
}
