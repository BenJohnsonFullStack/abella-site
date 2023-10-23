import { TeamMemberCard } from "@/components/elements";
import { team } from "@/constants";

const OurTeam = () => {
  return (
    <>
      <section id="our-team">
        <h2>Our Team</h2>
        <div className="team-member-container">
          {team.map((member) => (
            <div key={member.id} className="card">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
