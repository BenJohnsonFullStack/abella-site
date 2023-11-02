"use client";

import Image from "next/image";
import { buttonText } from "@/constants";
import { TextSection, Button } from ".";
import { useScreenSize } from "@/hooks";

const HighlightCard = ({ smallImg, largeImg, title, description, link }) => {
  const [isSmall] = useScreenSize();

  return (
    <div className="highlight-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={isSmall ? smallImg : largeImg}
        alt="background image for highlight card"
        className="highlight-image"
      />
      <div className="highlight-card-content">
        <TextSection>
          <h3>{title}</h3>
          <p>{description}</p>
        </TextSection>
        <Button styleClass="btn-secondary" link={link}>
          {buttonText.action}
        </Button>
      </div>
    </div>
  );
};

export default HighlightCard;
