import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/index";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/NavBar";
import { Portfolio } from "@/components/Portfolio";
import { Form } from "@/components/Form";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <h1>{t("title")}</h1>
        <Form />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}
