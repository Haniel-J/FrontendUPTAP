import PageLayout from "@/components/layouts/PageLayout";
import PageHeader from "@/components/layouts/PageHeader";
import PlanSelector from "./components/PlanSelector";
import CarreraGrid from "./components/CarreraGrid";

export default function OfertaEducativa() {
  return (
    <PageLayout>
      <PageHeader
        title="Oferta Educativa"
        description="Conoce los programas académicos que ofrece la Universidad Politécnica de Tapachula."
      />

      <PlanSelector />
      <CarreraGrid />
    </PageLayout>
  );
}