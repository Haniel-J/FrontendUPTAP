import PageLayout from "@/components/layouts/PageLayout";

import PageHeader from "@/components/layouts/PageHeader";

import EmptyState from "@/components/common/EmptyState";

export default function ServiciosEscolares() {

    return (

        <PageLayout>

            <PageHeader

                title="Servicios Escolares"

                description="Consulta los trámites, documentos y servicios disponibles."

            />

            <EmptyState
                message="Los servicios escolares serán cargados desde Strapi."
            />

        </PageLayout>

    );

}