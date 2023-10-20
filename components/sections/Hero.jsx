import { Logo, PrimaryButton } from "../elements";
import { buttonText } from "../../constants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-logo-container">
        <Logo />
      </div>
      <PrimaryButton>{buttonText.schedule}</PrimaryButton>
    </section>
  );
};

export default Hero;
