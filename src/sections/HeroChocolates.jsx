import blue from "../assets/blue.webp";
import brown from "../assets/brown.webp";
import green from "../assets/green.webp";
import red from "../assets/red.webp";

import BrownOpened from "../assets/brown-opened.webp";
import GreenOpened from "../assets/green-opened.webp";
import RedOpened from "../assets/red-opened.webp";
import BlueOpened from "../assets/blue-opened.webp";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HeroChocolates = ({ activeFlavor }) => {
  useGSAP(() => {
    gsap.from(".choco-enter-side", {
      y: "60%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".choco-enter-center", {
      y: "40%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    SplitText.create("h1", {
      type: "chars",
      onSplit(self) {
        gsap.from(self.chars, {
          scale: 1.3,
          opacity: 0,
          stagger: 0.08,
          ease: "power3.out",
        });
      },
    });

    gsap.from("h2", {
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });
  });

  return (
    <>
      <div className="relative z-20 text-center text-brown py-16 md:py-25 px-3 bg-background pt-28 md:pt-35">
        <h1 className="text-[44px] sm:text-[55px] md:text-[100px] font-serif text-details font-light leading-tight md:leading-28">
          Coleção Souvenirs
        </h1>
        <h2 className="text-[16px] md:text-[20px] leading-5 font-body text-black/65 mt-2 md:-mt-2">
          O sabor das lembranças que você nunca esqueceu de sentir.
        </h2>

        <div className="flex justify-center items-start gap-1.5 sm:gap-2 md:gap-8 mt-12 md:mt-20">
          <div className="choco-enter-side">
            <img
              src={activeFlavor === "brown" ? BrownOpened : brown}
              alt="Chocolate Brown"
              className="pointer-events-none h-44 sm:h-56 md:h-115 w-auto object-contain relative z-30 Brown-choco -mt-2 md:mt-8 drop-shadow-[0_20px_25px_rgba(65,30,20,0.18)]"
            />
          </div>

          <div className="choco-enter-center">
            <img
              src={activeFlavor === "green" ? GreenOpened : green}
              alt="Chocolate Green"
              className="pointer-events-none h-44 sm:h-56 md:h-115 w-auto object-contain relative z-20 Green-choco -mt-6 md:-mt-8 drop-shadow-[0_20px_25px_rgba(65,30,20,0.18)]"
            />
          </div>

          <div className="choco-enter-center">
            <img
              src={activeFlavor === "red" ? RedOpened : red}
              alt="Chocolate Red"
              className="pointer-events-none h-44 sm:h-56 md:h-115 w-auto object-contain relative z-20 Red-choco -mt-6 md:-mt-8 drop-shadow-[0_20px_25px_rgba(65,30,20,0.18)]"
            />
          </div>

          <div className="choco-enter-side">
            <img
              src={activeFlavor === "blue" ? BlueOpened : blue}
              alt="Chocolate Blue"
              className="pointer-events-none h-44 sm:h-56 md:h-115 w-auto object-contain relative z-20 Blue-choco -mt-2 md:mt-8 drop-shadow-[0_20px_25px_rgba(65,30,20,0.18)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroChocolates;
