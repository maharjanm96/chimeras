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
      const lenis = new Lenis();
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          imageWrapper.current,
          {
            width: "35vw",
            height: "75vh",
            x: "25vw",
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
            0.2,
          );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=150%",
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
            y: "-18vh",
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
        mm.revert();
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Revealed Left Panel */}
      <div
        ref={revealText}
        className="absolute inset-0 z-0 flex items-center pt-24 pb-12"
      >
        <div className="flex flex-col h-full w-full md:w-[55vw] md:bg-accent-green/40 rounded-r-4xl">
          {/* CHIMERAS title — sits at top portion */}
          <div className="flex items-center md:items-start justify-start px-6 md:px-20 pt-6 md:pt-10 mt-auto">
            <h2 className="text-[17vw] md:text-[9vw] font-serif leading-none text-neutral-800 uppercase italic">
              Chimeras
            </h2>
          </div>

          {/* Flex spacer — pushes description band down */}
          <div className="flex-1" />

          {/* DESCRIPTION + ARROW — pinned in the middle-bottom band */}
          <div className="flex flex-row items-center justify-between w-full px-6 md:px-20 py-5 md:py-6">
            <h2 className="w-full md:w-[30vw] text-[3.5vw] md:text-base font-light leading-relaxed text-neutral-900 text-justify font-serif italic">
              &quot;Every chimera takes shape in the silence of the
              subconscious, but manifestation gives it life. When the soul
              recognizes its own elusive longing, illusion transforms into will,
              and will into form. In that moment of emergence, the intangible
              sheds its shadows, and what was once a fleeting phantom steps
              forward into reality.&quot;
            </h2>

            <Image
              src="/arrow.webp"
              alt="Arrow"
              width={100}
              height={100}
              className="hidden md:block w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] max-w-[7rem] max-h-[7rem] text-neutral-800 font-light shrink-0"
            />
          </div>

          {/* Bottom spacer — reserve space so description isn't flush to bottom */}
          <div style={{ height: "18%" }} />
        </div>
      </div>

      {/* Main Image Layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div
          ref={imageWrapper}
          className="relative w-[90vw] md:w-[95vw] max-w-full h-[75vh] md:h-full overflow-hidden"
          style={{ borderRadius: "0px" }}
        >
          {/* Hero Text Overlay */}
          <div className="absolute inset-0 md:-inset-20 z-20 flex flex-col justify-center items-center text-center p-0 md:p-0">
            <h1
              ref={mainTitle}
              className="text-[10vw] md:text-[8vw] font-serif leading-[1.1] md:leading-[0.9] italic 
             text-slate-200/30 mix-blend-difference"
            >
              Where Illusions <br />
              <i className="font-light italic">Emerge & Endure</i>
            </h1>
          </div>

          {/* Main Image */}
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
