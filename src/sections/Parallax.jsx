
import Banner from "../assets/banner-colection-souvenirs.webp";

const Parallax = () => {
  return (
    <section className="inner-container h-screen py-20 max-md:h-[65vh] max-md:py-10">
      <div
        className="h-full rounded-xl bg-fixed bg-cover bg-center max-md:bg-scroll max-md:bg-position-[center_center]"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      ></div>
    </section>
  );
};

export default Parallax;
