import SectionBackground from "@/components/layouts/SectionBackground";
import NewsCard from "@/components/News/NewsCard";
import { avisosData } from "./avisos.data";

export default function AvisosSection() {
  return (
     <SectionBackground
          background="/videos/welcome_img/background2.jpeg"
          color="#722064"
          opacity={0.90}
        >
    
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-poppins">
          Avisos
        </h2>

        <button className="text-[#098049] font-poppins hover:underline">
          Ver más →
        </button>

      </div>
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {avisosData.map((aviso) => (
          <NewsCard
            key={aviso.id}
            news={aviso}
          />
        ))}
      </div>
</SectionBackground>

  );
}