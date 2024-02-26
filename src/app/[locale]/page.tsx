import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Cta } from "@/components/Cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Cta />
      <Portfolio />

      {/* SECTION TEAM */}
      <div className="section-title">
        <h2 id="titleTeam">Team</h2>
        <p id="descTeam">
          With a well trained staff, our team has years of experience and is
          ready for the next challenge.
        </p>
      </div>

      {/* SECTION Frequently Asked Questions */}
      {/* <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2 id="frequentlyTitle">Frequently Asked Questions (FAQ)</h2>
            <p id="questionDesc">
              These are our most frequently asked questions:
            </p>
          </div>

          <div className="faq-list">
            <ul>
              <li>
                <i className="bx bx-help-circle icon-help"></i>
                <a id="faq1" className="collapse">
                  What is your typical lead time?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-1"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p id="answer1">
                    We ask for a contractual confirmation 45-30 days before the
                    event, after that withing 2-3 weeks we will have your booth
                    built and ready to go. We do accept projects within less
                    than 30 days before the event, but prices may vary
                  </p>
                </div>
              </li>

              <li data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i>
                <a
                  id="faq2"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Which other states/countries do you also operate?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p id="answer2">
                    We can operate in all the states in the US, except Hawaii
                    and Alaska. We also operate in Canada, Mexico, Brazil, UK
                    and Spain (if your country is not listed, please contact us
                    for further information).
                  </p>
                </div>
              </li>

              <li data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i>
                <a
                  id="faq3"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  What types of booths do you work with?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p id="answer3">
                    We make custom built booths utilizing plywood and we also
                    offer the Octanorm line for a lower budget.
                  </p>
                </div>
              </li>

              <li data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>
                <a
                  id="faq4"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  What does your price include?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p id="answer4">
                    Depending on your needs we offer a design and everything
                    that goes in the booth, from the structure itself to the
                    flooring, electrical and furniture.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2 id="frequentlyTitle">Frequently Asked Questions (FAQ)</h2>
            <p id="questionDesc">
              These are our most frequently asked questions:
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-5">
            <AccordionItem value="item-1" className="p-3 bg-white rounded">
              <AccordionTrigger className="text-lg leading-6 font-medium outline-none text-[#37517e]">
                What is your typical lead time?
              </AccordionTrigger>
              <AccordionContent>
                We ask for a contractual confirmation 45-30 days before the
                event, after that withing 2-3 weeks we will have your booth
                built and ready to go. We do accept projects within less than 30
                days before the event, but prices may vary
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="p-3 bg-white rounded">
              <AccordionTrigger className="text-lg leading-6 font-medium outline-none text-[#37517e]">
                Which other states/countries do you also operate?
              </AccordionTrigger>
              <AccordionContent>
                We can operate in all the states in the US, except Hawaii and
                Alaska. We also operate in Canada, Mexico, Brazil, UK and Spain
                (if your country is not listed, please contact us for further
                information).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="p-3 bg-white rounded">
              <AccordionTrigger className="text-lg leading-6 font-medium outline-none text-[#37517e]">
                What types of booths do you work with?
              </AccordionTrigger>
              <AccordionContent>
                We make custom built booths utilizing plywood and we also offer
                the Octanorm line for a lower budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="p-3 bg-white rounded">
              <AccordionTrigger className="text-lg leading-6 font-medium outline-none text-[#37517e]">
                What does your price include?
              </AccordionTrigger>
              <AccordionContent>
                Depending on your needs we offer a design and everything that
                goes in the booth, from the structure itself to the flooring,
                electrical and furniture.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
