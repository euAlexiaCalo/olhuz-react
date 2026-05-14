import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Member.css";
interface MemberProps {
  name: string;
  position: string;
  photo: string;
  alt: string;
  github?: string;
  linkedin: string;
}

function Member({ name, position, photo, alt, github, linkedin }: MemberProps) {
  return (
    <div className="member-card">
      <img src={photo} alt={alt} className="member-photo" />
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-icon" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default Member;
