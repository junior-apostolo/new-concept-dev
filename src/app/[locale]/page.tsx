import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { NextIntlClientProvider } from "next-intl";

export default function Home({}) {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
