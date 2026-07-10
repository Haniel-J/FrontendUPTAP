import { apiFetch } from "./client";

import type { Modulo } from "@/types/modulo";

export async function getModulos(): Promise<Modulo[]> {

    const data = await apiFetch(
        "/api/modulos?populate=*"
    );

    return data.data;

}