import { Logo, PrimaryButton } from "./index";
import { buttonText } from "../constants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-logo-container">
          <Logo />
        </div>
        <PrimaryButton>{buttonText.schedule}</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
