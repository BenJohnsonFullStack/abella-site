import { Logo, Button } from "@/components/elements";
import { buttonText } from "@/constants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-logo-container">
        <Logo />
      </div>
      <Button styleClass="btn-primary" link="#sign-up">
        {buttonText.schedule}
      </Button>
      <div className="nav-border border-gap"></div>
    </section>
  );
};

export default Hero;
