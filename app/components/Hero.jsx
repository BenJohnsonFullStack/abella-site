import { Logo, PrimaryButton } from "./index";
import { buttonText } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen mx-auto">
      <div className="h-screen mx-auto flex flex-col items-center justify-between border-solid border-2 border-red-600">
        <Logo />
        <PrimaryButton>{buttonText.schedule}</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
