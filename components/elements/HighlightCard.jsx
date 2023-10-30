"use client";

import Image from "next/image";
import { buttonText } from "@/constants";
import { TextSection, SecondaryButton } from ".";
import { useScreenSize } from "@/hooks";

const HighlightCard = ({ smallImg, largeImg, title, description }) => {
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
        <SecondaryButton>{buttonText.action}</SecondaryButton>
      </div>
    </div>
  );
};

export default HighlightCard;
