import { Logo, PrimaryButton } from "@/components/elements";
import { buttonText } from "@/constants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-logo-container">
        <Logo />
      </div>
      <div className="hero-btn-container">
        <PrimaryButton>{buttonText.schedule}</PrimaryButton>
      </div>
      <div className="nav-border border-gap"></div>
    </section>
  );
};

export default Hero;
