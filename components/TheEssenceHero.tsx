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

      // 2. Main Scroll Timeline
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

      return () => {
        lenis.destroy();
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
        className="absolute flex flex-col inset-20 flex justify-evenly z-0"
      >
        <h2 className="text-[7vw] md:text-[10vw] font-serif leading-none text-neutral-800 uppercase italic">
          Chimeras
        </h2>
        <div className="flex gap-80 items-center justify-start">
          <h2 className=" w-[25vw] text-lg font-light leading-none text-neutral-900 text-justify font-serif italic">
            "Every chimera takes shape in the silence of the subconscious, but
            manifestation gives it life. When the soul recognizes its own
            elusive longing, illusion transforms into will, and will into form.
            In that moment of emergence, the intangible sheds its shadows, and
            what was once a fleeting phantom steps forward into reality."
          </h2>

          <Image
            src="/arrow.webp"
            alt="Arrow"
            width={100}
            height={100}
            className="w-[7rem] h-[7rem] text-neutral-800 font-light"
          />
        </div>
      </div>

      {/* Main Image Layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pt-24 pb-12">
        <div
          ref={imageWrapper}
          className="relative w-[95vw] h-[80vh] overflow-hidden"
          style={{ borderRadius: "0px" }}
        >
          {/* Main Hero Content */}
          <div className="absolute -inset-20 z-20 flex flex-col justify-center items-center text-center p-10">
            <h1
              ref={mainTitle}
              className="text-[5vw] md:text-[8vw] font-serif leading-[0.9] italic 
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
            className="w-full h-full object-cover rounded-[4rem]"
          />
        </div>
      </div>
    </section>
  );
}
