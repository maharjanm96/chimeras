"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

const SECTIONS = [
  { left: "Eco", right: "Friendly", image: "/dreams/dream1.png" },
  { left: "Organic", right: "Textures", image: "/dreams/dream2.png" },
  { left: "Brighten", right: "Glow", image: "/dreams/dream3.png" },
  { left: "Natural", right: "Aesthetics", image: "/dreams/dream4.png" },
];

export default function WorkSections() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative z-20 bg-white pb-32">
      {/* Floating Hover Image */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-40 w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl opacity-0 scale-50 transition-all duration-300 ease-out"
        style={{
          opacity: activeImage ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${activeImage ? 1 : 0.5}) rotate(${activeImage ? 5 : 0}deg)`,
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

      <div className="border-t border-black">
        {SECTIONS.map((section, idx) => (
          <div
            key={idx}
            className="group relative border-b border-black py-12 transition-colors hover:bg-black/5"
            onMouseEnter={() => setActiveImage(section.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <div className="section-container flex items-center justify-center gap-12 text-center md:gap-24">
              <span className="font-serif text-[6vw] leading-none tracking-tight md:text-[5vw]">
                {section.left}
              </span>
              <span className="text-[6vw] font-bold leading-none tracking-tighter md:text-[5vw]">
                {section.right}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
