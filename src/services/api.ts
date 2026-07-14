// URL base de Railway
 
export const API_URL =
  import.meta.env.VITE_API_URL;


 //API Token de solo lectura
  
export const STRAPI_TOKEN =
  import.meta.env.VITE_STRAPI_TOKEN;

// Construye la URL absoluta de una imagen

export function getMediaUrl(url?: string) {

  if (!url) return "";

  return `${API_URL}${url}`;

}