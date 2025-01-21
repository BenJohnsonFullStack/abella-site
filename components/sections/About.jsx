import { highlights } from "@/constants";
import { ActionCard, HighlightCard } from "../elements";

const About = () => {
  return (
    <>
      <section id="about">
        <h1>Health Coaching • Yoga</h1>
        <div className="highlights-container">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card-container">
              <HighlightCard {...highlight} />
            </div>
          ))}
        </div>
        <div className="action-card-container">
          <ActionCard />
        </div>
      </section>
    </>
  );
};

export default About;
