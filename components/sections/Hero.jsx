import { Logo, PrimaryButton } from "@/components/elements";
import { buttonText } from "@/constants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-logo-container">
        <Logo />
      </div>
      <div className="hero-btn-container">
        <h1>Health Coaching • Yoga • Energy Healing</h1>
        <PrimaryButton>{buttonText.schedule}</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
