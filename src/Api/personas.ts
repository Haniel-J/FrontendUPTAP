import { apiFetch } from "./client";

import type { Persona } from "@/types/persona";

export async function getPersonas(): Promise<Persona[]> {

    const data = await apiFetch(
        "/api/personas?populate=*"
    );

    return data.data;

}