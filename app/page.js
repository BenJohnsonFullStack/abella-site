import PrimaryButton from "./components/PrimaryButton";
import Logo from "./components/Logo";
import { buttonText } from "./constants";

export default function Home() {
  return (
    <main>
      <div className="bg-abella-hero bg-cover bg-no-repeat bg-center">
        <Logo />
        <PrimaryButton>{buttonText.schedule}</PrimaryButton>
      </div>
    </main>
  );
}
