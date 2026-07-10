/**
 * Modelo de una Carrera recibido desde Strapi.
 * Este tipo representa únicamente los datos que actualmente
 * devuelve el backend.
 */

export interface Carrera {

  id: number;

  documentId: string;

  nombre: string;

  slug: string;

  nivel: string;

  descripcion_corta: string;

  perfil_egreso: string | null;

  campo_laboral: string | null;

  plan: string;

  linea_investigacion: string | null;

  atributos_egreso: string | null;

  createdAt: string;

  updatedAt: string;

  publishedAt: string;

  plan_estudios_pdf: unknown;

  imagen: unknown;

  logo: unknown;

  seo: unknown;

  mapa_curricular: unknown[];

  planta_docente: unknown[];

}