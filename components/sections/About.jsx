import { highlights, team } from "@/constants";
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

          {/* <ActionCard /> */}
        </div>

        <div className="team-member-container">
          {team.map((member) => (
            <div key={member.id} className="highlight-card">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
