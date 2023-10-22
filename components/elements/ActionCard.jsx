import Image from "next/image";
import React from "react";
import { TextSection, SecondaryButton } from ".";

const ActionCard = ({ imageUrl, title, points }) => {
  return (
    <div className="action-card">
      {/* <Image src={imageUrl} alt="programs image" /> */}
      <TextSection>
        <h3>Programs</h3>
        <ul>
          {/** MAP OVER POINTS */}
          <li>Programs List</li>
          {/** END OF MAP */}
        </ul>
      </TextSection>
      <SecondaryButton>Learn More</SecondaryButton>
    </div>
  );
};

export default ActionCard;
