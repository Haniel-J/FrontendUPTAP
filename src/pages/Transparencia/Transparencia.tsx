import PageLayout from "@/components/layouts/PageLayout";

import PageHeader from "@/components/layouts/PageHeader";

import EmptyState from "@/components/common/EmptyState";

export default function Transparencia() {

    return (

        <PageLayout>

            <PageHeader

                title="Transparencia"

                description="Consulta la información institucional y los documentos públicos de la Universidad."

            />

            <EmptyState
                message="Aquí se mostrarán los documentos y enlaces obtenidos desde Strapi."
            />

        </PageLayout>

    );

}