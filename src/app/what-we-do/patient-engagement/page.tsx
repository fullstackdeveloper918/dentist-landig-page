import ServiceDetailPage from "../service-detail-page";

export default function PatientEngagementPage() {
  return (
    <ServiceDetailPage
      service="Patient Engagement"
      description="Automated reminders, online booking, and patient portals to enhance the patient experience."
      imagePath="/what-we-do/patient-engagement.jpg"
      features={[
        "Patient portal with secure access",
        "Automated appointment reminders",
        "Online booking system",
        "Digital intake forms",
        "Two-way messaging system",
        "Patient education resources",
      ]}
      benefits={[
        "Reduce no-show rates by up to 70%",
        "Increase patient satisfaction scores",
        "Save staff time on phone calls",
        "Improve patient communication",
        "Enhance treatment adherence",
      ]}
    />
  );
}
