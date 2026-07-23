interface Props {

    nombre: string;

    descripcion: string;

    nivel: string;

    imagen: string;

}

export default function CarreraCard({

    nombre,

    descripcion,

    nivel,

    imagen,

}: Props) {

    return (

        <article
            className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-xl
                hover:-translate-y-2
                transition
            "
        >

            <img

                src={imagen}

                alt={nombre}

                className="
                    w-full
                    h-56
                    object-cover
                "

            />

            <div className="p-6">

                <span
                    className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        bg-[#098049]
                        text-white
                        text-sm
                    "
                >

                    {nivel}

                </span>

                <h2
                    className="
                        mt-5
                        text-2xl
                        font-semibold
                    "
                >

                    {nombre}

                </h2>

                <p
                    className="
                        mt-4
                        text-gray-600
                        leading-7
                    "
                >

                    {descripcion}

                </p>

            </div>

        </article>

    );

}