import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/NavBar";
import { Portfolio } from "@/components/Portfolio";
import { Form } from "@/components/Form";
import { Contact } from "@/components/Contact";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <h1>{t("title")}</h1>
        <Portfolio />
        <Contact/>
      </div>
      <Footer />
    </div>
  );
}
