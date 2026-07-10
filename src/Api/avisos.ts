import { apiFetch } from "./client";

import type { Aviso } from "@/types/aviso";

export async function getAvisos(): Promise<Aviso[]> {

    const data = await apiFetch(
        "/api/avisos?populate=*"
    );

    return data.data;

}