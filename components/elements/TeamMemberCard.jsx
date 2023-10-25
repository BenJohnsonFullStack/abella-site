import Image from "next/image";
import { TextSection } from ".";

const TeamMemberCard = ({ image, name, role, credentials, description }) => {
  return (
    <div className="card">
      <Image
        src={image}
        alt="team member image"
        className="team-member-image"
      />
      <div className="card-content">
        <TextSection>
          <div className="team-member-title">
            <h3>{name}</h3>
            <h4>{role}</h4>
            <h5>
              <span className="italic">{credentials}</span>
            </h5>
          </div>
          <p>{description}</p>
        </TextSection>
      </div>
    </div>
  );
};

export default TeamMemberCard;
