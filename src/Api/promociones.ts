import { apiFetch } from "./client";

import type { Promocion } from "@/types/promocion";

export async function getPromociones(): Promise<Promocion[]> {

    const data = await apiFetch(
        "/api/promocions?populate=*"
    );

    return data.data;

}