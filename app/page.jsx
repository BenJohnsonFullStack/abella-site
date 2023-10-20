import {
  About,
  Contact,
  Footer,
  Hero,
  Nav,
  OurTeam,
  SignUp,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <OurTeam />
      <SignUp />
      <Contact />
      <Footer />
    </main>
  );
}
