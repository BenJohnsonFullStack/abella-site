import PrimaryButton from "./components/PrimaryButton";
import Logo from "./components/Logo";
import { buttonText } from "./constants";

export default function Home() {
  return (
    <main className="bg-blue-100">
      <div className="bg-abella-hero bg-cover bg-no-repeat bg-center">
        <section id="hero" className="w-full h-screen mx-auto">
          <div className="h-full">
            <div className="h-screen mx-auto flex flex-col items-center gap-20">
              <Logo />
              <PrimaryButton>{buttonText.schedule}</PrimaryButton>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
