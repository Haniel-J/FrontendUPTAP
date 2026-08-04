"use client";
import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiDribbble } from "react-icons/si";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/hoverr-footer";

export default function HoverFooter() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Employee Handbook", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        {
          label: "Live Chat",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-[#722064]" />,
      text: "aspirantes@uptapachula.edu.mx",
      href: "mailto:aspirantes@uptapachula.edu.mx",
    },
    {
      icon: <Phone size={20} className="text-[#722064]" />,
      text: "(962) 689 0090 EXT. 1001-1021",
      href: "tel:+529626890090",
    },
    {
      icon: <MapPin size={20} className="text-[#722064]" />,
      text: "Tapachula-Puerto Madero Km. 24+300",
      href: "https://www.google.com/maps/place/UNIVERSIDAD+POLITÉCNICA+DE+TAPACHULA.+UD1/@14.7469306,-92.3999745,21z/data=!4m6!3m5!1s0x858e1c21d788d1f3:0xef7f0843a662d0ae!8m2!3d14.7463956!4d-92.3990696!16s%2Fg%2F11byx310_d?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    { icon: <SiFacebook size={20} />, label: "Facebook", href: "https://www.facebook.com" },
    { icon: <SiInstagram size={20} />, label: "Instagram", href: "https://www.instagram.com" },
    { icon: <SiX size={20} />, label: "Twitter", href: "https://twitter.com" },
    { icon: <SiDribbble size={20} />, label: "Dribbble", href: "https://dribbble.com/nurui" },
    { icon: <Globe size={20} />, label: "Globe", href: "https://www.nurui.com" },
  ];

  return (
    // 1. Cambiamos 'rounded-3xl m-8' por 'w-full rounded-none m-0' para que ocupe toda la sección
    <footer className="bg-[#0F0F11] relative h-fit w-full overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#722064] text-3xl font-extrabold">
                UPTAP
              </span>
              <span className="text-white text-3xl font-bold">UPTAP</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
               Formando profesionistas con innovación, calidad y compromiso
            para el desarrollo de la sociedad.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contacto
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-1 text-gray-400">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#722064] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#722064] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-800 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-gray-400">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#722064] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Uptap. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Text hover effect adaptado al ancho completo */}
      <div className="lg:flex hidden h-10rem -mt-10 -mb-30 w-full justify-center items-center">
        <TextHoverEffect text="UPTAP" className="z-50 w-full" />
      </div>
      <FooterBackgroundGradient />
    </footer>
  );
}