import { buttonText } from "@/constants";
import { TextSection, SecondaryButton } from ".";

const HighlightCard = ({ image, title, description }) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt="background image for highlight card"
        className="highlight-image"
      />
      <TextSection>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextSection>
      <SecondaryButton>{buttonText.action}</SecondaryButton>
    </>
  );
};

export default HighlightCard;
