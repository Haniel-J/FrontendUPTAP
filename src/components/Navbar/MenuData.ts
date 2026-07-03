import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    title: "Identidad",
    children: [
      { title: "Historia", href: "/historia" },
      { title: "Misión y Visión", href: "/mision-vision" },
      { title: "Rectoría", href: "/rectoria" },
      { title: "Organigrama", href: "/organigrama" },
      { title: "Directorio", href: "/directorio" },
    ],
  },

  {
    title: "Oferta Educativa",
    children: [
      { title: "Licenciaturas", href: "/licenciaturas" },
      { title: "Posgrados", href: "/posgrados" },
      { title: "Modelo Educativo", href: "/modelo" },
    ],
  },

  {
    title: "Vinculación",
    children: [
      { title: "Convenios", href: "/convenios" },
      { title: "Movilidad", href: "/movilidad" },
      { title: "Servicio Social", href: "/servicio-social" },
    ],
  },

  {
    title: "Convocatorias",
    href: "/convocatorias",
  },

  {
    title: "Transparencia",
    children: [
      { title: "Marco Jurídico", href: "/marco" },
      { title: "Obligaciones", href: "/obligaciones" },
    ],
  },

  {
    title: "Servicios Escolares",
    children: [
      { title: "Inscripciones", href: "/inscripciones" },
      { title: "Reinscripciones", href: "/reinscripciones" },
      { title: "Titulación", href: "/titulacion" },
    ],
  },

  {
    title: "Servicios",
    children: [
      { title: "Biblioteca", href: "/biblioteca" },
      { title: "PED", href: "/ped" },
      { title: "SIIUP", href: "/siiup" },
    ],
  },

  {
    title: "Calendario Escolar",
    href: "/calendario",
  },
];