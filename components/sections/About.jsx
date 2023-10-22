import { highlights } from "@/constants";
import { ActionCard, HighlightCard, TeamMemberCard } from "../elements";

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

        <div className="team-member-container">
          {/** MAP OVER TEAM MEMBERS */}
          <TeamMemberCard />
          {/** END OF MAP */}
        </div>
      </section>
    </>
  );
};

export default About;
