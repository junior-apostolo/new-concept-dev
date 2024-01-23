import type { Metadata } from "next";
import { Jost, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const jost = Jost({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-open_sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// export async function generateStaticParams() {
//   const languages = i18n.locales.map((lang) => ({ lang }));
//   return languages;
// }

const locales = ['en-US', 'pt-BR'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "New Concept Exhibition",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <head>
        <link href="/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/vendor/remixicon/remixicon.css" rel="stylesheet" />
        {/* <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}
      </head>
      <body
        className={`${jost.variable} ${poppins.variable} ${open_sans.variable}`}
      >
        {children}

        <script src="/vendor/aos/aos.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        {/* <script src="/vendor/swiper/swiper-bundle.min.js"></script> */}
        <script src="/vendor/waypoints/noframework.waypoints.js"></script>

        <script src="/js/main.js"></script>
      </body>
    </html>
  );
}
