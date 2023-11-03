import {
  About,
  Footer,
  Hero,
  Nav,
  OurTeam,
  SignUp,
} from "@/components/sections";
import { Test } from "@/emails";

export default async function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="site-wrapper">
        <About />
        <OurTeam />
        <SignUp />
      </main>
      <Footer />
    </>
  );
}
