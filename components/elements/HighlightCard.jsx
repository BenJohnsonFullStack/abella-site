import Image from "next/image";
import { TextSection } from ".";

const HighlightCard = ({ image, title, description }) => {
  return (
    <div className="highlight-card">
      <Image src={image} alt="highlight image" />
      <TextSection>
        <h3>Header</h3>
        <p>Highlight</p>
      </TextSection>
    </div>
  );
};

export default HighlightCard;
