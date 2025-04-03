import ServiceDetailPage from "../service-detail-page";

export default function FinancialManagementPage() {
  return (
    <ServiceDetailPage
      service="Financial Management"
      description="Streamlined billing, insurance claims, and financial reporting to optimize your practice revenue."
      imagePath="/what-we-do/financial-management.jpg"
      features={[
        "Automated billing and invoicing",
        "Insurance claim processing",
        "Payment processing and tracking",
        "Financial reporting and analytics",
        "Revenue cycle management",
        "Cost tracking and analysis",
      ]}
      benefits={[
        "Increase collection rates by up to 25%",
        "Reduce billing errors by 95%",
        "Accelerate payment processing",
        "Improve financial visibility",
        "Optimize revenue streams",
      ]}
    />
  );
}
