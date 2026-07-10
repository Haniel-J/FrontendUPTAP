export default function Footer() {
  return (
    // Pie de página institucional
    <footer className="bg-[#0B5E3C] text-white mt-05">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
      >
        {/* Información institucional */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Universidad Politécnica de Tapachula
          </h3>

          <p className="text-sm leading-7 text-gray-200">
            Formando profesionistas con innovación, calidad y compromiso
            para el desarrollo de la sociedad.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Enlaces
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Inicio</li>
            <li>Oferta Académica</li>
            <li>Noticias</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contacto
          </h3>

          <p className="text-sm">
            Tapachula, Chiapas
          </p>

          <p className="text-sm">
            contacto@uptapachula.edu.mx
          </p>
        </div>

      </div>

      {/* Derechos */}
      <div className="border-t border-white/20 py-4 text-center text-sm">
        © 2026 Universidad Politécnica de Tapachula.
      </div>

    </footer>
  );
}