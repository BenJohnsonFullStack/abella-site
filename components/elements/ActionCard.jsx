"use client";

import Image from "next/image";
import { TextSection, Button } from ".";
import { buttonText, programs } from "@/constants";
import { hands, handsLarge } from "@/assets";
import { useScreenSize } from "@/hooks";

const ActionCard = () => {
  const [isSmall] = useScreenSize();

  return (
    <div className="action-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={isSmall ? hands : handsLarge}
        alt="programs image"
        className="highlight-image"
      />
      <div className="action-card-content">
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
        <Button styleClass="btn-secondary" link="#sign-up">
          {buttonText.action}
        </Button>
      </div>
    </div>
  );
};

export default ActionCard;
