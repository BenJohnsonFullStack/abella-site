import Image from "next/image";
import { TextSection } from ".";

const TeamMemberCard = ({ image, name, role, credentials, description }) => {
  return (
    <>
      {/* <Image src={image} alt="team member image" /> */}
      <TextSection>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <h4>
          <span className="italic">{credentials}</span>
        </h4>
        <p>{description}</p>
      </TextSection>
    </>
  );
};

export default TeamMemberCard;
