import { ReactNode } from "react";


import Footer from "@/components/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>

      {/* Contenido de cada página */}
      <main>
        {children}
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
}