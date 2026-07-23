const planes = [

    "Todos",

    "Ingenierías",

    "Licenciaturas",

    "Maestrías",

    "Doctorados",

];

export default function PlanSelector() {

    return (

        <div
            className="
                flex
                flex-wrap
                gap-4
                mb-14
            "
        >

            {

                planes.map((plan) => (

                    <button

                        key={plan}

                        className="
                            px-6
                            py-3
                            rounded-full
                            border
                            border-[#098049]
                            text-[#098049]
                            hover:bg-[#098049]
                            hover:text-white
                            transition
                        "

                    >

                        {plan}

                    </button>

                ))

            }

        </div>

    );

}