"use client";

import React, { useState, useRef, useEffect } from "react";

interface Card3DProps {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  className?: string;
}

export default function Card3D({
  children,
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  speed = 500,
  className = "",
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
  });
  const [isMobile, setIsMobile] = useState(false);
  const isMoving = useRef(false);

  // Check if device is mobile/touch-only to disable hover tilt
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    // Use requestAnimationFrame for performance throttling
    if (!isMoving.current) {
      isMoving.current = true;
      requestAnimationFrame(() => {
        const card = cardRef.current;
        if (!card) {
          isMoving.current = false;
          return;
        }

        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Mouse position relative to the element (from center)
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        // Calculate rotation angles (invert Y axis for correct tilting sensation)
        const tiltX = (-(mouseY / (height / 2)) * maxTilt).toFixed(2);
        const tiltY = ((mouseX / (width / 2)) * maxTilt).toFixed(2);

        setStyle({
          transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
          transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
        });
        isMoving.current = false;
      });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms cubic-bezier(0.25, 1, 0.5, 1)`,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`gpu-accelerate preserve-3d ${className}`}
    >
      {children}
    </div>
  );
}
