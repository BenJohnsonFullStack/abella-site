import Image from "next/image";
import { TextSection } from ".";

const TeamMemberCard = ({ image, name, role, credentials, description }) => {
  return (
    <div className="card-content">
      <Image
        src={image}
        alt="team member image"
        className="team-member-image"
      />
      <TextSection>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <h4>
          <span className="italic">{credentials}</span>
        </h4>
        <p>{description}</p>
      </TextSection>
    </div>
  );
};

export default TeamMemberCard;
