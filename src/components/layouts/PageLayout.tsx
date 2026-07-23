import SectionBackground from "@/components/layouts/SectionBackground";
import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;

  background?: string;

  color?: string;

  opacity?: number;
}

export default function PageLayout({
  children,
  background = "/videos/welcome_img/background2.jpeg",
  color = "#FFFFFF",
  opacity = 0.92,
}: PageLayoutProps) {
  return (
    <>
      <SectionBackground
        background={background}
        color={color}
        opacity={opacity}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          {children}
        </div>
      </SectionBackground>

      <Footer />
    </>
  );
}