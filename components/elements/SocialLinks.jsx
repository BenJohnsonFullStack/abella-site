import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="socials">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="https://instagram.com/abellatotalhealth" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/abella-total-health"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
