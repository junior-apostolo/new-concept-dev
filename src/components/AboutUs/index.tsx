import "./styles.css";

export function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2 id="aboutUs">About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p id="aboutDescription1">
              Founded in 2020, New Concept Exhibition is focused on producing
              new and modern designs that elevate and influence the way your
              company is seen by the public. We are committed to bring our
              clients ideas to light by utilizing high quality materials
              delivering better results to the final product.
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p id="aboutDescription2">
              With connections from the entire US territory, our personnel are
              constantly searching for new methods of innovating the market and
              are ready for the next challenge.
            </p>
            {/* <a href="#" className="btn-learn-more">
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
