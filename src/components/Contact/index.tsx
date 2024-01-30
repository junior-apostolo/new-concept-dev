"use client";
import './styles.css';
import { Form } from "@/components/Form";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2 id="contactForm">Contact</h2>
          <p id="descriptionContact">
            Our event budgeting form is designed to help you plan the perfect
            event by providing a detailed estimate of associated costs. By
            filling out this form, you will help us better understand your needs
            and expectations for the event. After submitting the form, our team
            will review your information and contact you as soon as possible
            with a personalized quote for your event. We look forward to helping
            you plan an unforgettable event!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4 id="address">Location:</h4>
                <p>2033 W McNab Rd, Unit G Pompano Beach, FL 33069</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4 id="email">Email:</h4>
                <p>newconceptexhibit@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4 id="phone">Call:</h4>
                <p>(561) 260-1263</p>
              </div>

              <iframe
                className="border-none w-full h-[298px]"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2033 W McNab Rd, Unit G Pompano Beach, FL 33069&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
