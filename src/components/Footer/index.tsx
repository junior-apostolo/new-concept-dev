import Link from "next/link";
import "./styles.css";

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6  footer-contact">
              <h3>NewConcept</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> (561) 260-1263
                <br />
                <strong>Email:</strong> newconceptexhibit@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="#">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links mt-3">
                <Link href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/newconceptexhibit/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </Link>
                <Link href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>NewConcept</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits"></div>
      </div>
    </footer>
  );
}
