import { highlights } from "@/constants";
import { ActionCard, HighlightCard } from "../elements";

const About = () => {
  return (
    <>
      <section id="about">
        <h1>Health Coaching • Yoga • Energy Healing</h1>
        <div className="highlights-container">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="card">
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
