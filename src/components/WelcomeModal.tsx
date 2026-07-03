import { X } from "lucide-react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({
  isOpen,
  onClose,
}: WelcomeModalProps) {

  const navigateToConvocatorias = () => {
    window.location.href = "/convocatorias";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">

      {/* Contenedor principal */}
      <div className="relative w-[90%] max-w-2xl animate-scaleIn">


          {/* Contenido */}
          <div className="relative rounded-2xl overflow-hidden">

            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="
                absolute
                top-3
                right-3
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-lg
                transition
                hover:scale-110
              "
            >
              <X size={24} />
            </button>

            {/* Imagen */}
            <img
              src="/videos/welcome_img/img.png"
              alt="Convocatoria"
              onClick={navigateToConvocatorias}
              className="
                w-full
                cursor-pointer
                transition
                hover:scale-[1.02]
              "
            />

          </div>

      </div>
    </div>
  );
}