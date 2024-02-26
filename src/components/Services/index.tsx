import React from 'react'
import './styles.css'

export function Services() {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title">
          <h2 id="titleService">Services</h2>
          <p id="serviceDesc">
            We provide all your needs to make your booth look perfect and a
            successful event.
          </p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-palette"></i>
              </div>
              <h4 id="serviceCard1">
                <a href="">Design</a>
              </h4>
              <p id="textCard1">
                We can bring your ideas to life with our experienced and
                creative designers.
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-hard-hat"></i>
              </div>
              <h4 id="serviceCard2">
                <a href="">Construction</a>
              </h4>
              <p id="textCard2">
                Once the design is approved, we will start producing your booth
                and in just a few days you will be able to see your project
                ready, being able to make any adjustments if necessary.
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 id="serviceCard3">
                <a href="">Installation/Dismantling</a>
              </h4>
              <p id="textCard3">
                We will transport and install your booth in the venue and once
                the event is over, we will dismantle everything
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-box"></i>
              </div>
              <h4 id="serviceCard4">
                <a href="">Storage</a>
              </h4>
              <p id="textCard4">
                After the event is over, we will bring the materials back to our
                warehouse and if you wish to use the same booth in any future
                event, we can store it for you and we will make sure it will be
                ready for the next show (fees may apply).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
