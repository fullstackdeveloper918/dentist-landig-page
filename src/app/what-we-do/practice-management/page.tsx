import ServiceDetailPage from "../service-detail-page";

export default function PracticeManagementPage() {
  return (
    <ServiceDetailPage
      service="Practice Management"
      description="Comprehensive tools to manage appointments, patient records, and staff scheduling all in one place."
      imagePath="/what-we-do/practice-management.jpg"
      features={[
        "Appointment scheduling and management",
        "Patient records and history tracking",
        "Staff scheduling and management",
        "Resource allocation optimization",
        "Automated reminders and notifications",
        "Custom workflow configuration",
      ]}
      benefits={[
        "Save up to 30% of administrative time",
        "Reduce scheduling errors by 90%",
        "Improve staff productivity",
        "Enhance patient satisfaction",
        "Streamline daily operations",
      ]}
    />
  );
}
