
import { useRef } from "react";
import Choco from "../assets/choco-1.png";
import Choco1 from "../assets/choco-2.png";
import Choco2 from "../assets/choco-3.png";
import Choco3 from "../assets/choco-4.png";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Taste = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const paths = gsap.utils.toArray(".draw-arrow path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const splits = [
        new SplitText(".label-1", { type: "chars" }),
        new SplitText(".label-2", { type: "chars" }),
        new SplitText(".label-3", { type: "chars" }),
        new SplitText(".label-4", { type: "chars" }),
      ];

      splits.forEach((split) => {
        gsap.set(split.chars, {
          opacity: 0,
          y: 8,
          filter: "blur(3px)",
        });
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: isMobile ? "+=1800" : "+=3200",
              scrub: 0.6,
              pin: true,
            },
          });

          const animateCallout = (stepIndex) => {
            const arrowLine = `.arrow-${stepIndex} .arrow-line`;
            const arrowHead = `.arrow-${stepIndex} .arrow-head`;
            const chars = splits[stepIndex - 1].chars;

            tl.to(arrowLine, {
              strokeDashoffset: 0,
              duration: 0.8,
              ease: "none",
            })
              .to(
                arrowHead,
                {
                  strokeDashoffset: 0,
                  duration: 0.25,
                  ease: "none",
                },
                "-=0.1"
              )
              .to(
                chars,
                {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  duration: 0.5,
                  stagger: 0.05,
                  ease: "power2.out",
                },
                "-=0.05"
              );
          };

          animateCallout(1);

          tl.set(".step-1", { display: "none" });
          animateCallout(2);

          tl.set(".step-2", { display: "none" });
          animateCallout(3);

          tl.set(".step-3", { display: "none" });
          animateCallout(4);

          tl.to({}, { duration: 0.6 });
        }
      );

      return () => {
        mm.revert();
        splits.forEach((s) => s.revert());
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-[radial-gradient(circle_at_center,#b82927_0%,#7a1514_100%)]
      text-white text-center h-screen pt-20 md:pt-24 pb-16 md:pb-20 px-4 md:px-0 overflow-hidden select-none flex flex-col justify-between"
    >
      <h2 className="font-body text-[28px] sm:text-[34px] md:text-[45px] leading-tight text-white z-50">
        Mordeu, derreteu,{" "}
        <span className="bg-accent px-3 py-0.5 rounded-4xl italic inline-block mt-1 md:mt-0">
          viciou.
        </span>
      </h2>

      <div className="relative flex justify-center items-center flex-1 w-full">

        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-68 md:h-68 flex justify-center items-center">

          <div className="step-1 absolute inset-0 flex justify-center items-center z-40">
            <img
              src={Choco}
              alt="Chocolate inteiro"
              className="img-1 max-w-48 sm:max-w-56 md:max-w-78 transform rotate-45"
            />
          </div>

          <div className="step-2 absolute inset-0 flex justify-center items-center z-30">
            <img
              src={Choco1}
              alt="Chocolate com 1 mordida"
              className="img-2 max-w-48 sm:max-w-56 md:max-w-78 transform rotate-45"
            />
          </div>

          <div className="step-3 absolute inset-0 flex justify-center items-center z-20">
            <img
              src={Choco2}
              alt="Chocolate com 2 mordidas"
              className="img-3 max-w-48 sm:max-w-56 md:max-w-78 transform rotate-45"
            />
          </div>

          <div className="step-4 absolute inset-0 flex justify-center items-center z-10">
            <img
              src={Choco3}
              alt="Chocolate com 3 mordidas"
              className="drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)] img-4 max-w-48 sm:max-w-56 md:max-w-78 transform rotate-45"
            />
          </div>

          <div className="absolute -top-16 -right-16 sm:-right-24 md:-top-14 md:-right-75 z-50 flex items-center gap-1.5 md:gap-3 pointer-events-none">
            <svg
              className="draw-arrow arrow-1 w-12 h-10 sm:w-16 sm:h-12 md:w-28 md:h-20 overflow-visible text-current"
              viewBox="0 0 120 80"
              fill="none"
            >
              <path
                className="arrow-line"
                d="M 8 68 Q 48 18 108 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="arrow-head"
                d="M 98 11 L 110 18 L 98 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="label-1 font-serif text-[22px] sm:text-[26px] md:text-[35px] tracking-tight">
              Caramelo
            </span>
          </div>

          <div className="absolute -top-16 -left-16 sm:-left-24 md:-top-14 md:-left-64 z-50 flex items-center gap-1.5 md:gap-3 pointer-events-none">
            <span className="label-2 font-serif text-[22px] sm:text-[26px] md:text-[35px] tracking-tight">
              Crocante
            </span>

            <svg
              className="draw-arrow arrow-2 w-12 h-10 sm:w-16 sm:h-12 md:w-28 md:h-20 overflow-visible text-current"
              viewBox="0 0 120 80"
              fill="none"
            >
              <path
                className="arrow-line"
                d="M 112 68 Q 72 18 12 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="arrow-head"
                d="M 22 11 L 10 18 L 22 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="absolute -bottom-16 -right-12 sm:-right-20 md:-bottom-16 md:-right-46 z-50 flex items-center gap-1.5 md:gap-3 pointer-events-none">
            <svg
              className="draw-arrow arrow-3 w-12 h-10 sm:w-16 sm:h-12 md:w-28 md:h-20 overflow-visible text-current"
              viewBox="0 0 120 80"
              fill="none"
            >
              <path
                className="arrow-line"
                d="M 8 12 Q 48 62 108 62"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="arrow-head"
                d="M 98 55 L 110 62 L 98 69"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="label-3 font-serif text-[22px] sm:text-[26px] md:text-[35px] tracking-tight">
              Limão
            </span>
          </div>

          <div className="absolute -bottom-16 -left-12 sm:-left-20 md:-bottom-16 md:-left-46 z-50 flex items-center gap-1.5 md:gap-3 pointer-events-none">
            <span className="label-4 font-serif text-[22px] sm:text-[26px] md:text-[35px] tracking-tight">
              Leite
            </span>

            <svg
              className="draw-arrow arrow-4 w-12 h-10 sm:w-16 sm:h-12 md:w-28 md:h-20 overflow-visible text-current"
              viewBox="0 0 120 80"
              fill="none"
            >
              <path
                className="arrow-line"
                d="M 112 12 Q 72 62 12 62"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="arrow-head"
                d="M 22 55 L 10 62 L 22 69"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Taste;
