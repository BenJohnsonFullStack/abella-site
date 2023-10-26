import {
  About,
  Contact,
  Footer,
  Hero,
  Nav,
  OurTeam,
  SignUp,
} from "@/components/sections";

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
