import { useEffect, useState } from "react";

import MainLayout from "@/components/layouts/MainLayout";
import SectionBackground from "@/components/layouts/SectionBackground";
import NewsCard from "@/components/News/NewsCard";

import { API_URL } from "@/services/api";

interface News {
  id: number;
  titulo: string;
  resumen: string;
  imagen_destacada: {
    url: string;
  };
}

export default function Noticias() {

  // Noticias obtenidas desde Strapi
  const [news, setNews] = useState<News[]>([]);

  // Obtener noticias al cargar la página
  useEffect(() => {

    const getNews = async () => {

      try {

        const response = await fetch(
          `${API_URL}/api/noticias?populate=*&sort=publishedAt:desc`
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

    <MainLayout>

      <SectionBackground
        background="/videos/welcome_img/background2.jpeg"
        color="#FFFFFF"
        opacity={0.92}
      >

        {/* Encabezado */}
        <header className="mb-14 text-center">

          <h1 className="text-4xl md:text-5xl font-poppins font-bold">
            Noticias
          </h1>

          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Mantente informado sobre las actividades,
            eventos y logros de la Universidad Politécnica de Tapachula.
          </p>

        </header>

        {/* Listado de noticias */}
        <section
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
                image: `${API_URL}${item.imagen_destacada.url}`,
              }}
            />

          ))}

        </section>

      </SectionBackground>

    </MainLayout>

  );

}