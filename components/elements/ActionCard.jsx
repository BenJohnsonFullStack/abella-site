import Image from "next/image";
import { TextSection, SecondaryButton } from ".";
import { buttonText, programs } from "@/constants";
import { hands } from "@/assets";

const ActionCard = () => {
  return (
    <div className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={hands} alt="programs image" className="highlight-image" />
      <div className="card-content">
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
      </div>
      <SecondaryButton>{buttonText.action}</SecondaryButton>
    </div>
  );
};

export default ActionCard;
