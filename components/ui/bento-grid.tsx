"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Check, Copy } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("razan.rezzq@gmail.com");
    setCopied(true);

    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8b5cf6", "#d946ef", "#06b6d4"],
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/8 group/bento hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-linear-to-br from-neutral-900 to-neutral-950 cursor-pointer",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(4,7,29,0.95) 0%, rgba(12,14,35,0.95) 50%, rgba(4,7,29,0.95) 100%)",
      }}
      role="article"
      aria-label={`Grid item ${id}`}
    >
      {/* Animated gradient border effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 blur-xl" />
      </div>

      <div
        className={`${id === 6 && "flex justify-center"} h-full relative z-10`}
      >
        {/* Background images */}
        {img && (
          <div className="w-full h-full absolute overflow-hidden">
            <Image
              src={img}
              alt=""
              fill
              sizes="100vw"
              className={cn(
                imgClassName,
                imgClassName?.includes("opacity") ? "" : "opacity-40",
                "object-cover object-center group-hover/bento:opacity-60 transition-opacity duration-300"
              )}
              unoptimized
            />
          </div>
        )}
        {spareImg && (
          <div
            className={`absolute right-0 -bottom-5 overflow-hidden ${
              id === 5 && "w-full opacity-80"
            }`}
          >
            <Image
              src={spareImg}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center w-full h-full opacity-50 group-hover/bento:opacity-70 transition-opacity duration-300"
              unoptimized
            />
          </div>
        )}

        {/* Special backgrounds for specific items */}
        {id === 1 && (
          <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 via-transparent to-fuchsia-600/10" />
        )}

        {id === 2 && (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-full bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
              />
            </div>
            {/* Globe emoji animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl opacity-20"
            >
              🌍
            </motion.div>
          </>
        )}

        {id === 4 && (
          <div className="absolute inset-0 bg-linear-to-br from-cyan-600/10 via-transparent to-violet-600/10" />
        )}

        {id === 5 && (
          <div className="absolute inset-0 bg-linear-to-tr from-fuchsia-600/10 via-transparent to-violet-600/10" />
        )}

        {id === 6 && (
          <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 via-fuchsia-600/10 to-cyan-600/10" />
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-1 transition-transform duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 mb-2"
            >
              {description}
            </motion.div>
          )}

          {/* Title */}
          {title && (
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent`}
            >
              {title}
            </div>
          )}

          {/* Item 6 - Copy Email Button */}
          {id === 6 && (
            <div className="mt-5 relative flex-1 flex items-end justify-center pb-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-violet-500/20 bg-linear-to-r from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm px-6 font-medium text-slate-200 transition-all hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] focus:outline-none"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy My Email</span>
                  </>
                )}
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/bento:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};
