import ServiceDetailPage from "../service-detail-page";

export default function ClinicalToolsPage() {
  return (
    <ServiceDetailPage
      service="Clinical Tools"
      description="Digital charting, treatment planning, and imaging integration for efficient clinical workflows."
      imagePath="/what-we-do/clinical-tools.jpg"
      features={[
        "Digital charting and documentation",
        "Treatment planning tools",
        "Imaging integration and management",
        "Clinical decision support",
        "Lab integration and results tracking",
        "Prescription management",
      ]}
      benefits={[
        "Reduce charting time by up to 40%",
        "Improve treatment plan acceptance",
        "Enhance clinical decision making",
        "Streamline documentation workflow",
        "Improve care coordination",
      ]}
    />
  );
}
