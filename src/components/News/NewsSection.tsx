import { useEffect, useState } from "react";
import SectionBackground from "@/components/layouts/SectionBackground";
import NewsCard from "./NewsCard";
import { API_URL } from "@/services/api";

// Tipo que representa una noticia recibida desde Strapi
interface News {
  id: number;
  titulo: string;
  resumen: string;
  imagen_destacada: {
    url: string;
  };
}

export default function NewsSection() {

  // Estado donde guardaremos las noticias
  const [news, setNews] = useState<News[]>([]);

  // Se ejecuta una sola vez cuando el componente aparece
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/noticias?populate=*`
        );
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error("Error cargando noticias", error);
      }
    };
    getNews();
  }, []);

  return (

    <SectionBackground
      background="/videos/welcome_img/background2.jpeg"
      color="#722064"
      opacity={0.90}
    >

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-poppins">
          Noticias
        </h2>
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

        {news.map((item) => (
          <NewsCard
            key={item.id}
            news={{
              id: item.id,
              title: item.titulo,
              description: item.resumen,
              image: `${API_URL}${item.imagen_destacada.url}`
            }}
          />
        ))}
      </div>
    </SectionBackground>

  );

}