import Image from "next/image";
import { TextSection } from ".";

const HighlightCard = ({ image, title, description }) => {
  return (
    <>
      {/* <Image src={image} alt="highlight image" /> */}
      <TextSection>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextSection>
    </>
  );
};

export default HighlightCard;
