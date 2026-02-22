"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SECTIONS = [
  { left: "Mythical", right: "Origins", image: "/dreams/dream1.png" },
  { left: "Genetic", right: "Fusion", image: "/dreams/dream2.png" },
  { left: "Silent", right: "Subconscious", image: "/dreams/dream3.png" },
  { left: "Impossible", right: "Pursuits", image: "/dreams/dream4.png" },
  { left: "Awakened", right: "Realities", image: "/dreams/dream5.png" },
];

export default function WorkSections() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      const rows = gsap.utils.toArray(".section-row") as HTMLElement[];
      rows.forEach((row) => {
        const leftText = row.querySelector(".text-left-anim");
        const rightText = row.querySelector(".text-right-anim");

        gsap.fromTo(
          [leftText, rightText],
          { y: 80, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-[#050505] text-white py-16 rounded-[2.5rem] m-3"
    >
      {/* Floating Hover Image */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-64 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl opacity-0 scale-50 transition-all duration-300 ease-out"
        style={{
          opacity: activeImage ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${
            activeImage ? 1 : 0.5
          }) rotate(${activeImage ? 5 : 0}deg)`,
        }}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt="Hover Preview"
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="border-t border-white/10">
          {SECTIONS.map((section, idx) => (
            <div
              key={idx}
              className="section-row group relative border-b border-white/10 py-4 transition-colors hover:bg-white/5 cursor-none overflow-hidden"
              onMouseEnter={() => setActiveImage(section.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="section-container flex items-center justify-evenly relative z-10">
                <span className="text-left-anim font-serif italic text-[3vw] leading-none tracking-tight md:text-[4vw] text-white/90 block transform-gpu">
                  {section.left}
                </span>
                <span className="text-right-anim text-[3vw] font-serif italic leading-none tracking-tighter md:text-[4vw] text-white/40 block transform-gpu text-right group-hover:text-white/80 transition-colors duration-500">
                  {section.right}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
