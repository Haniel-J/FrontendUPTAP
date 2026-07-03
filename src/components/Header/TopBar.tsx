// Importamos iconos de redes sociales
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";
import { GooeyInput } from "@/components/reactbits/gooey-input";

export default function TopBar() {
  return (
    // Barra superior
<div className="w-full bg-white text-gray-600">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center gap-2 md:gap-4">

    {/* IZQUIERDA */}
    <div className="flex items-center gap-4">

      <img
        src="src/assets/logos/LOGOESTADO.PNG"
        alt="Logo Estado"
        className="h-9"
      />

      <a href="/home">
        <img
          src="src/assets/logos/LOGOUPTAP.png"
          alt="Logo UPTAP"
          className="h-10"
        />
      </a>
       
     

    </div>

    {/* DERECHA */}
    <div className="flex items-center gap-4">

      <a
        href="http://34.71.32.187"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs md:text-sm hover:text-[#098049] transition-colors"
      >
        PED
      </a>

      
      <a
        href="https://siiup.uptapachula.edu.mx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs md:text-sm hover:text-[#098049] transition-colors"
      >
        SIIUP
      </a>

      <div className="w-px h-5 bg-gray-500"></div>

      <a
        href="https://www.facebook.com/UniversidadPolitecnicaTapachula"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/uptapachula"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-400 transition-colors"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.youtube.com/@universidadpolitecnicadeta883"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition-colors"
      >
        <FaYoutube />
      </a>

      {/* Buscador */}
      <div className="relative hidden md:block">
      <GooeyInput placeholder="Buscar..." />
      </div>
    </div>

  </div>
</div>
      
  );
}