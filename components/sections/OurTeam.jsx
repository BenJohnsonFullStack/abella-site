import { TeamMemberCard } from "@/components/elements";
import { team } from "@/constants";

const OurTeam = () => {
  return (
    <>
      <section id="our-team">
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

export default OurTeam;
