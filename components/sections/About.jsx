import { ActionCard, HighlightCard, TeamMemberCard } from "../elements";

const About = () => {
  return (
    <>
      <section id="about">
        <h2>What We Do</h2>
        <div className="highlights-container">
          {/** MAP OVER HIGHLIGHTS */}
          <HighlightCard />
          {/** END OF MAP */}

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
