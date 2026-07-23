interface EmptyStateProps {

    title?: string;

    message?: string;

}

export default function EmptyState({

    title = "Próximamente",

    message = "Esta sección estará disponible muy pronto."

}: EmptyStateProps) {

    return (

        <section
            className="
                py-20
                flex
                flex-col
                items-center
                justify-center
                text-center
            "
        >

            <div
                className="
                    w-24
                    h-24
                    rounded-full
                    bg-[#098049]/10
                    flex
                    items-center
                    justify-center
                    text-4xl
                "
            >

                🚧

            </div>

            <h2
                className="
                    mt-8
                    text-3xl
                    font-poppins
                    text-[#098049]
                "
            >

                {title}

            </h2>

            <p
                className="
                    mt-5
                    max-w-xl
                    text-gray-600
                    leading-8
                "
            >

                {message}

            </p>

        </section>

    );

}