import { ContactInfo, SocialLinks } from "@/components/elements";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="nav-border"></div>
      <div className="footer-container">
        <ContactInfo />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
