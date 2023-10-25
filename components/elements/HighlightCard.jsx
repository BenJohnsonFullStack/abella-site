import Image from "next/image";
import { buttonText } from "@/constants";
import { TextSection, SecondaryButton } from ".";

const HighlightCard = ({ image, title, description }) => {
  return (
    <div className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={image}
        alt="background image for highlight card"
        className="highlight-image"
      />
      <div className="card-content">
        <TextSection>
          <h3>{title}</h3>
          <p>{description}</p>
        </TextSection>
      </div>
      <SecondaryButton>{buttonText.action}</SecondaryButton>
    </div>
  );
};

export default HighlightCard;
