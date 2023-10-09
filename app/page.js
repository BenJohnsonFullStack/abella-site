import Button from "./components/Button";
import Logo from "./components/Logo";
import { buttonText } from "./constants";

export default function Home() {
  return (
    <main>
      <div className="bg-abella-hero bg-cover bg-no-repeat bg-center">
        <Logo />
        <Button>{buttonText.schedule}</Button>
      </div>
    </main>
  );
}
