import { ReactNode, CSSProperties } from "react";

interface SectionBackgroundProps {
  children: ReactNode;
  background: string;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function SectionBackground({
  children,
  background,
  color = "#722064",
  opacity = 0.30,
  className = "",
}: SectionBackgroundProps) {
  return (
    <section
      className={`relative overflow-hidden py-20 ${className}`}
      style={{
        backgroundColor: color,
      }}
    >
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={
          {
            backgroundImage: `url(${background})`,
            opacity,
          } as CSSProperties
        }
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}