import Navbar from "../Navbar/Navbar";
import SplitText from "@/components/reactbits/SplitText";

export default function HeroVideo() {
  return (
    // Contenedor principal del Hero
    <section className="relative w-full h-[85vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
     
     <Navbar />
     
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/videofondo.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
     

      {/* Contenido principal del Hero */}
      <div
        className="
          absolute
          inset-0
          z-20
          flex
          items-center
          justify-center
          px-4
          text-center
        "
      >
        <SplitText
          text="UNIVERSIDAD POLITÉCNICA DE TAPACHULA"
          className="
            text-white
            font-monserrat
            uppercase
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            leading-tight
          "
        />
      </div>
    </section>
  );
}