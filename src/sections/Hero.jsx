import { useRef, useState, useEffect } from "react";
import HeroChocolates from "./HeroChocolates";
import FlavorCards from "./FlavorCards";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const [activeFlavor, setActiveFlavor] = useState(null);

  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useGSAP(
    () => {
      const pairs = [
        { choco: ".Brown-choco", card: ".brown-card" },
        { choco: ".Green-choco", card: ".green-card" },
        { choco: ".Red-choco", card: ".red-card" },
        { choco: ".Blue-choco", card: ".blue-card" },
      ];

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions;
          const targetScale = isMobile ? 0.82 : isTablet ? 0.7 : 0.85;
          const cardAnchorY = isMobile ? 0.05 : isTablet ? 0.35 : 0.4;
          const chocoAnchorY = isMobile ? 0.52 : 0.68;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: isMobile ? "60% center" : "74% center",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          });

          pairs.forEach(({ choco: chocoSelector, card: cardSelector }) => {
            const choco = containerRef.current.querySelector(chocoSelector);
            const card = containerRef.current.querySelector(cardSelector);

            if (!choco || !card) return;

            tl.to(
              choco,
              {
                x: () => {
                  const c = choco.getBoundingClientRect();
                  const t = card.getBoundingClientRect();
                  const currentX = Number(gsap.getProperty(choco, "x")) || 0;
                  return t.left + t.width / 2 - (c.left - currentX + c.width / 2);
                },
                y: () => {
                  const c = choco.getBoundingClientRect();
                  const t = card.getBoundingClientRect();
                  const currentY = Number(gsap.getProperty(choco, "y")) || 0;
                  return (
                    t.top +
                    t.height * cardAnchorY -
                    (c.top - currentY + c.height * chocoAnchorY)
                  );
                },
                scale: targetScale,
                ease: "none",
              },
              0
            );
          });
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="choco-section inner-container relative w-full max-w-[1920px] mx-auto overflow-x-clip"
    >
      <HeroChocolates activeFlavor={activeFlavor} />
      <FlavorCards setActiveFlavor={setActiveFlavor} />
    </section>
  );
};

export default Hero;
