import { useEffect } from "react";
import { getCarreras } from "@/api/carreras";

export default function Carreras() {

    useEffect(() => {
        async function load() {
            const carreras = await getCarreras();
            console.log(carreras);
        }

        load();

    }, []);

    return (
        <div>
            Revisa la consola.
        </div>
    );

}