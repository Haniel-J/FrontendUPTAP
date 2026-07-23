// Componentes principales de la página
// @ts-ignore: TopBar is a .jsx module without TypeScript declarations
// @ts-ignore: HeroVideo is a .jsx module without TypeScript declarations
import HeroVideo from "../components/Hero/HeroVideo";
import { useEffect, useState } from "react";
import {NewsSection} from "@/components/News/NewsSection";
import { ScrollBasedLine } from "@/components/ScrollBasedLine";
import WelcomeModal from "@/components/WelcomeModal";
import HeroCarousel from "@/components/Carousel/HeroCarousel";
import AvisosSection from "@/components/Avisos/AvisosSection";
import OfertaEducativaSection from "@/components/OfertaEduc/OfertaEducativaSection";
import Footer from "@/components/Footer/Footer";
import OfertaEducativa from "./OfertaEducativa/OfertaEducativa";
import Transparencia from "./Transparencia/Transparencia";
import ServiciosEscolares from "./ServiciosEscolares/ServiciosEscolares";


function Home() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("welcomeModal");

    if (!alreadyShown) {
      setShowModal(true);
      localStorage.setItem("welcomeModal", "true");
    }
  }, []);

  return (
    <>
    <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <main>
      
      <HeroVideo />

     <ScrollBasedLine />  

      <HeroCarousel />

      <NewsSection />

      <AvisosSection />

      <OfertaEducativaSection />
      
      <Footer />

      <OfertaEducativa />

      <Transparencia />

      <ServiciosEscolares />



      </main>
    </>
  );
}

export default Home;