import { apiFetch } from "./client";

import type { Carrera } from "@/types/carrera";

export async function getCarreras(): Promise<Carrera[]> {

    const data = await apiFetch(
        `/api/carreras?populate=*`
    );

    return data.data;

}