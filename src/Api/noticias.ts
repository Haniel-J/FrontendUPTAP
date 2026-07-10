import { apiFetch } from "./client";

import type { Noticia } from "@/types/noticia";

/**
 * Obtiene todas las noticias.
 */
export async function getNoticias(): Promise<Noticia[]> {

  const data = await apiFetch(
    "/api/noticias?populate=*"
  );

  return data.data;

}

/**
 * Obtiene una noticia mediante documentId.
 */
export async function getNoticia(
  documentId: string
): Promise<Noticia> {

  const data = await apiFetch(
    `/api/noticias/${documentId}?populate=*`
  );

  return data.data;

}