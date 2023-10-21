import Image from "next/image";
import React from "react";
import { TextSection, SecondaryButton } from ".";

const ActionCard = ({ image, title, points }) => {
  return (
    <div className="action-card">
      <Image src={image} alt="inspire points image" />
      <TextSection>
        <h3>Inspire</h3>
        <ul>
          {/** MAP OVER POINTS */}
          <li>Inspire Point</li>
          {/** END OF MAP */}
        </ul>
      </TextSection>
      <SecondaryButton>Learn More</SecondaryButton>
    </div>
  );
};

export default ActionCard;
