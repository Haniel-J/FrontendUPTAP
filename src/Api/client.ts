import { API_URL, STRAPI_TOKEN } from "@/services/api";

// Cliente HTTP para consumir Strapi.
// Todas las peticiones pasan por aquí.

export async function apiFetch(endpoint: string) {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {

    throw new Error(
      `Error ${response.status}: ${response.statusText}`
    );

  }

  return response.json();

}