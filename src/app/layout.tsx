import "./globals.css";
import { Montserrat } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          Power Up Your Practice with Fintu - The All-in-One Payment and
          Scheduling Platform
        </title>
        <meta
          name="description"
          content="Fintu is the all-in-one platform for managing payments, patient scheduling, and practice operations. Scale your practice with ease."
        />
        <meta
          name="keywords"
          content="Fintu, payment management, patient scheduling, practice operations, healthcare software"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:site_name"
          content="Fintu | Payment and Scheduling Platform"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Power Up Your Practice with Fintu - The All-in-One Payment and Scheduling Platform"
        />
        <meta
          property="og:description"
          content="Fintu helps manage payments, patient scheduling, and practice operations, allowing you to focus on what matters most—your patients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fintu.io" />
        <meta property="og:image" content="/public/logo.png" />
        <meta property="og:image:alt" content="Fintu platform preview" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Article Meta Tags */}
        <meta
          property="article:published_time"
          content="2025-04-03T11:35:00+00:00"
        />
        <meta
          property="article:modified_time"
          content="2025-04-03T11:35:00+00:00"
        />
        <meta
          property="article:author"
          content="https://www.linkedin.com/in/yourprofile"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fintu_io" />
        <meta name="twitter:creator" content="@fintu_io" />
        <meta
          name="twitter:title"
          content="Power Up Your Practice with Fintu - The All-in-One Payment and Scheduling Platform"
        />
        <meta
          name="twitter:description"
          content="Fintu offers seamless payment processing, patient scheduling, and practice management tools. Focus on what matters—your patients."
        />
        <meta name="twitter:image" content="../../public/logo.png" />
      </Head>

      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
