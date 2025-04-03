import ServiceDetailPage from "../service-detail-page";

export default function ComplianceSecurityPage() {
  return (
    <ServiceDetailPage
      service="Compliance & Security"
      description="HIPAA-compliant systems with robust security features to protect patient data."
      imagePath="/what-we-do/compliance-security.jpg"
      features={[
        "HIPAA compliance tools and monitoring",
        "Data encryption and protection",
        "Access control and user permissions",
        "Audit logging and tracking",
        "Secure backup and recovery",
        "Security risk assessment",
      ]}
      benefits={[
        "Ensure regulatory compliance",
        "Protect sensitive patient data",
        "Reduce risk of data breaches",
        "Maintain patient trust and confidence",
        "Avoid costly compliance violations",
      ]}
    />
  );
}
