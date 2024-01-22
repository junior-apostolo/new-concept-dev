import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/index";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <>
      <Navbar />
      <Hero />
      <h1>{t("title")}</h1>
      <Footer />
    </>
  );
}
