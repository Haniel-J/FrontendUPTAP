import SectionBackground from "@/components/layouts/SectionBackground";

import OfertaCard from "./OfertaCard";
import { ofertaData } from "./oferta.data";

export default function OfertaEducativaSection() {
  return (
    <SectionBackground
      background="/videos/welcome_img/background2.jpeg"
      color="#FFFFFF"
      opacity={0.92}
    >
      {/* Encabezado */}
      <header className="text-center mb-20">

        <h2 className="text-4xl font-bold font-poppins">
          Oferta Educativa
        </h2>

        <p className="mt-4 text-gray-600">
          Descubre nuestros programas académicos.
        </p>

      </header>

      {/* Cards */}
      <section
        className="
          flex
          flex-col
          lg:flex-row
          justify-center
          items-center
          gap-10
        "
      >
        <OfertaCard
          title={ofertaData[0].titulo}
          subtitle={ofertaData[0].subtitulo}
          image={ofertaData[0].imagen}
        />

        <OfertaCard
          title={ofertaData[1].titulo}
          subtitle={ofertaData[1].subtitulo}
          image={ofertaData[1].imagen}
          featured
        />

        <OfertaCard
          title={ofertaData[2].titulo}
          subtitle={ofertaData[2].subtitulo}
          image={ofertaData[2].imagen}
        />
      </section>
    </SectionBackground>
  );
}