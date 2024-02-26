
import './styles.css'

export function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3 id="titleBG">NewConcept: Turning ideas into reality!</h3>
            <p id="descriptionBG">
              With NewConcept, your stand will be more than just a physical
              space - it will be an unforgettable experience that reflects the
              essence of your brand. Come build the future with us!
            </p>
          </div>
          {/* <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Call To Action
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
