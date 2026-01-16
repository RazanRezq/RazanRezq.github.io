"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const Spotlight = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight relative h-screen w-full overflow-hidden",
        className?.includes("bg-") ? "" : "bg-[#000319]",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <svg
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full animate-spotlight opacity-0",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <ellipse
          cx="-160"
          cy="45"
          rx="800"
          ry="350"
          fill={fill}
          fillOpacity="0.07"
          transform="rotate(-15)"
        />
      </svg>
    </div>
  );
};
