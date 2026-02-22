"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TheEssenceHero() {
  const container = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const mainTitle = useRef<HTMLHeadingElement>(null);
  const revealText = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Initialize Smooth Scroll (Lenis)
      const lenis = new Lenis();
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // 2. Main Scroll Timeline with matchMedia
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=200%", // Scroll distance
            scrub: 1, // Smooth scrubbing
            pin: true, // Pin the section
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          imageWrapper.current,
          {
            width: "35vw",
            height: "75vh",
            x: "25vw", // Move to right
            borderRadius: "2rem",
            ease: "power2.inOut",
          },
          0,
        )
          .to(
            mainTitle.current,
            {
              scale: 0.8,
              opacity: 0,
              y: -50,
              ease: "power2.inOut",
            },
            0,
          )
          .fromTo(
            revealText.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, ease: "power2.out" },
            0.2, // Starts slightly after image begins moving
          );
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=150%", // Slightly shorter scroll distance
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          imageWrapper.current,
          {
            width: "90vw",
            height: "45vh",
            y: "-18vh", // Move it up nicely into the top half
            borderRadius: "1.5rem",
            ease: "power2.inOut",
          },
          0,
        )
          .to(
            mainTitle.current,
            {
              scale: 0.8,
              opacity: 0,
              y: -20,
              ease: "power2.inOut",
            },
            0,
          )
          .fromTo(
            revealText.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "power2.out" },
            0.2,
          );
      });

      return () => {
        lenis.destroy();
        mm.revert(); // Cleanup matchMedia on unmount
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Big Text (Revealed later) */}
      <div
        ref={revealText}
        className="absolute inset-x-6 bottom-10 md:inset-20 flex flex-col justify-end md:justify-evenly z-0 pt-24 md:pt-0"
      >
        <div className="flex flex-col items-center justify-center gap-4 md:flex md:items-start md:justify-evenly md:h-[60vh]">
          <h2 className="text-[17vw] md:text-[10vw] font-serif leading-none text-neutral-800 uppercase italic">
            Chimeras
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-60 items-start md:items-center justify-start mt-2 md:mt-0 md:px-10">
            <h2 className="w-full md:w-[25vw] text-[4vw] md:text-lg font-light leading-relaxed md:leading-none text-neutral-900 text-justify font-serif italic">
              "Every chimera takes shape in the silence of the subconscious, but
              manifestation gives it life. When the soul recognizes its own
              elusive longing, illusion transforms into will, and will into
              form. In that moment of emergence, the intangible sheds its
              shadows, and what was once a fleeting phantom steps forward into
              reality."
            </h2>

            <Image
              src="/arrow.webp"
              alt="Arrow"
              width={100}
              height={100}
              className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-neutral-800 font-light hidden md:block"
            />
          </div>
        </div>
      </div>

      {/* Main Image Layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div
          ref={imageWrapper}
          className="relative w-[90vw] md:w-[95vw] max-w-full h-[75vh] md:h-[80vh] overflow-hidden"
          style={{ borderRadius: "0px" }}
        >
          {/* Main Hero Content */}
          <div className="absolute inset-0 md:-inset-20 z-20 flex flex-col justify-center items-center text-center p-6 md:p-10">
            <h1
              ref={mainTitle}
              className="text-[10vw] md:text-[8vw] font-serif leading-[1.1] md:leading-[0.9] italic 
             text-slate-200/30 mix-blend-difference hover:text-slate-200/60 
             transition-opacity duration-1000"
            >
              Where Illusions <br />
              <i className="font-light italic">Emerge & Endure</i>
            </h1>
          </div>

          {/* Placeholder Image */}
          <Image
            src="/main.png"
            alt="Nature"
            fill
            className="w-full h-full object-cover rounded-[2rem] md:rounded-[4rem]"
          />
        </div>
      </div>
    </section>
  );
}
