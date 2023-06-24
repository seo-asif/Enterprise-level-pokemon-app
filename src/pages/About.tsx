import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/asif.webp";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="profile">
      <img src={avatarImage} alt="Asif Mosharraf" className="profile-image" />
      <h1 className="profile-text">Hi..I am Asif Mosharraf</h1>
      <h2 className="profile-text">Creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This is a learning project of mine by using various modern library &
        tools
      </h4>
      <div className="profile-links">
        <a href="https://github.com/seo-asif/">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/asifmosharraf/">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/asif064">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Wrapper(About);
