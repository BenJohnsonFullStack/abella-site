import { highlights } from "@/constants";
import { ActionCard, HighlightCard } from "../elements";

const About = () => {
  return (
    <>
      <section id="about">
        <h2>What We Do</h2>
        <div className="highlights-container">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <HighlightCard {...highlight} />
            </div>
          ))}

          <ActionCard />
        </div>
      </section>
    </>
  );
};

export default About;
