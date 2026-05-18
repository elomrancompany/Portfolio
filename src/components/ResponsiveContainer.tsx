"use client";
import React from "react";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "max-w-full",
};

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = "",
  maxWidth = "2xl",
  padding = true,
}) => {
  return (
    <div
      className={`
        w-full mx-auto
        ${maxWidthClasses[maxWidth]}
        ${padding ? "px-4 md:px-6 lg:px-8" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
