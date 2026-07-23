import CarreraCard from "./CarreraCard";

import { carrerasDemo } from "../data/carrerasDemo";

export default function CarreraGrid() {

    return (

        <div
            className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-10
            "
        >

            {

                carrerasDemo.map((carrera) => (

                    <CarreraCard

                        key={carrera.id}

                        nombre={carrera.nombre}

                        descripcion={carrera.descripcion}

                        nivel={carrera.nivel}

                        imagen={carrera.imagen}

                    />

                ))

            }

        </div>

    );

}