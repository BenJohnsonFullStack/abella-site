import Image from "next/image";
import React from "react";
import { TextSection, SecondaryButton } from ".";
import { programs } from "@/constants";

const ActionCard = ({ imageUrl }) => {
  return (
    <div className="card">
      {/* <Image src={imageUrl} alt="programs image" /> */}
      <TextSection>
        <h3>Programs</h3>
        <ul>
          {programs.map((prog) => (
            <li key={prog.id} className="program-list-item">
              {prog.title}
              <span className="italic">{prog.description}</span>
            </li>
          ))}
        </ul>
      </TextSection>
      <SecondaryButton>Learn More</SecondaryButton>
    </div>
  );
};

export default ActionCard;
