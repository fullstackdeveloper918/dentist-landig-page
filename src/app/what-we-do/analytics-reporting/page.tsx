import ServiceDetailPage from "../service-detail-page";

export default function AnalyticsReportingPage() {
  return (
    <ServiceDetailPage
      service="Analytics & Reporting"
      description="Insightful data analytics and customizable reports to track practice performance and growth."
      imagePath="/what-we-do/analytics-reporting.jpg"
      features={[
        "Real-time performance dashboards",
        "Customizable reporting tools",
        "Business intelligence analytics",
        "Trend analysis and forecasting",
        "KPI tracking and monitoring",
        "Data visualization tools",
      ]}
      benefits={[
        "Gain actionable insights from your data",
        "Make data-driven business decisions",
        "Identify growth opportunities",
        "Track and improve key metrics",
        "Optimize resource allocation",
      ]}
    />
  );
}
