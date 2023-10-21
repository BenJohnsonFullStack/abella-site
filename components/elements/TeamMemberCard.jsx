import Image from "next/image";
import React from "react";
import { TextSection } from ".";

const TeamMemberCard = ({ image, name, role, credentials, description }) => {
  return (
    <div className="team-member-card">
      <Image src={image} alt="team member image" />
      <TextSection>
        <h3>Team Member Name</h3>
        <h4>Team Member Role</h4>
        <h4>Team Member Credentials</h4>
        <p>Team Member Description</p>
      </TextSection>
    </div>
  );
};

export default TeamMemberCard;
