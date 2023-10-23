import Image from "next/image";
import React from "react";
import { TextSection, SecondaryButton } from ".";
import { programs } from "@/constants";

const imageUrl =
  "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjBoYW5kc3xlbnwwfHwwfHx8MA%3D%3D";

const ActionCard = () => {
  return (
    <div className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt="programs image" className="highlight-image" />
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
