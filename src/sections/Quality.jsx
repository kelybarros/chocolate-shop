
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Quality = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      const cards = gsap.utils.toArray([
        ".card-blue",
        ".card-green",
        ".card-red",
      ]);

      const cardOffset = isMobile ? 380 : 650;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: isMobile ? "+=1500" : "+=2000",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".card-blue", {
        scale: 0.94,
        opacity: 0.85,
        duration: 1,
      })
        .fromTo(
          ".card-green",
          { y: cardOffset },
          { y: 0, duration: 1, ease: "power2.out" },
          "<"
        )

        .to(
          ".card-blue",
          {
            scale: 0.88,
            opacity: 0.7,
            duration: 1,
          }
        )
        .to(
          ".card-green",
          {
            scale: 0.94,
            opacity: 0.85,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".card-red",
          { y: cardOffset },
          { y: 0, duration: 1, ease: "power2.out" },
          "<"
        );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="quality"
      className="inner-container h-screen min-h-162.5 flex items-center bg-background overflow-hidden max-md:min-h-0 max-md:h-auto max-md:py-16"
    >
      <div className="grid grid-cols-12 gap-20 mx-44 w-full max-md:grid-cols-1 max-md:gap-10 max-md:mx-0 max-md:px-5">
        
        <div className="col-span-7 flex flex-col justify-between py-6 max-md:col-span-1 max-md:gap-5 max-md:py-0">
          <h2 className="text-black max-w-125 leading-13 text-[50px] max-md:text-[36px] max-md:leading-[1.1] max-sm:text-[30px]">
            O que entra em cada barra de{" "}
            <span className="text-accent-dark italic">
              Chocolate
            </span>
          </h2>

          <div className="max-w-115 text-[18px] leading-7 font-body text-black/70 max-md:text-[15px] max-md:leading-6">
            Cacau de origem selecionada, texturas crocantes e
            recheios preparados lentamente para derreter na medida certa.
          </div>
        </div>

        <div className="col-span-5 relative h-130 max-md:col-span-1 max-md:h-105 max-sm:h-97.5 max-md:w-full">

          <div
            className="card-blue bg-card-blue text-white rounded-3xl max-w-115 w-full p-10
            min-h-112 flex flex-col justify-between absolute top-0 right-0 z-10 origin-top shadow-xl
            max-md:max-w-none max-md:min-h-85 max-md:p-7 max-sm:p-6 max-md:rounded-2xl"
          >
            <div>
              <div className="text-[6.5vw] font-body font-semibold leading-none tracking-tight max-md:text-[58px] max-sm:text-[48px]">
                100%
              </div>

              <div className="text-3xl font-semibold font-body mt-3 max-md:text-2xl max-sm:text-xl">
                Cacau de Origem
              </div>
            </div>

            <p className="text-base font-body text-white/80 leading-5 max-md:text-sm">
              Amêndoas selecionadas de pequenas fazendas, livres de gordura
              hidrogenada ou aromatizantes artificiais.
            </p>
          </div>

          <div
            className="card-green bg-card-green text-white rounded-3xl max-w-115 w-full p-10
            min-h-112 flex flex-col justify-between absolute top-8 right-0 z-20 origin-top shadow-xl
            max-md:max-w-none max-md:min-h-85 max-md:p-7 max-sm:p-6 max-md:rounded-2xl"
          >
            <div>
              <div className="text-[6.5vw] font-body font-semibold leading-none tracking-tight max-md:text-[58px] max-sm:text-[48px]">
                48h
              </div>

              <div className="text-3xl font-semibold font-body mt-3 max-md:text-2xl max-sm:text-xl">
                De Conchagem Lenta
              </div>
            </div>

            <p className="text-base font-body text-white/80 leading-5 max-md:text-sm">
              Refino contínuo em baixa temperatura para alcançar uma textura
              aveludada que derrete instantaneamente na boca.
            </p>
          </div>

          <div
            className="card-red bg-card-red text-white rounded-3xl max-w-115 w-full p-10
            min-h-112 flex flex-col justify-between absolute top-16 right-0 z-30 origin-top shadow-xl
            max-md:max-w-none max-md:min-h-85 max-md:p-7 max-sm:p-6 max-md:rounded-2xl"
          >
            <div>
              <div className="text-[6.5vw] font-body font-semibold leading-none tracking-tight max-md:text-[58px] max-sm:text-[48px]">
                +40%
              </div>

              <div className="text-3xl font-semibold font-body mt-3 max-md:text-2xl max-sm:text-xl">
                De Inclusões Nobres
              </div>
            </div>

            <p className="text-base font-body text-white/80 leading-5 max-md:text-sm">
              Castanhas torradas na hora, caramelo artesanal e frutas
              liofilizadas distribuídos generosamente em cada pedaço.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quality;
