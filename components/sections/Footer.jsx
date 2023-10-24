import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="footer-container">
          <div className="contact">
            <h3>Questions? Comments?</h3>
            <address className="address">
              <a href="tel:7067806827">706.780.6827</a>
              <br />
              <a href="email:contact@abella-health.com">
                contact@abella-health.com
              </a>
            </address>
          </div>

          <div className="socials">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
