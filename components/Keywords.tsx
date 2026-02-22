"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const KEYWORDS = [
  "Friendly",
  "Eco",
  "Textures",
  "Organic",
  "Glow",
  "Brighten",
  "Aesthetics",
  "Natural",
];

export default function Keywords() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const badges = containerRef.current?.querySelectorAll(".keyword-badge");
      if (!badges) return;

      gsap.from(badges, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="keywords-section"
      className="section-padding relative z-10 py-28"
    >
      <div
        ref={containerRef}
        className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 md:gap-6"
      >
        {KEYWORDS.map((word) => (
          <motion.span
            key={word}
            className="keyword-badge inline-block cursor-default rounded-full border border-border bg-bg-primary/60 px-5 py-2.5 text-[0.85rem] font-medium tracking-wide text-text-primary/80 shadow-[0_4px_6px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(139,154,107,0.15)] md:px-7 md:py-3 md:text-[1rem]"
            whileHover={{
              scale: 1.08,
              rotate: Math.random() > 0.5 ? 2 : -2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
