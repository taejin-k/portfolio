import { useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import Design from "./Design/Design";
import FrontEnd from "./FrontEnd/FrontEnd";
import BackEnd from "./BackEnd/BackEnd";
import "./About.css";
import background_about from "../img/background_about.jpeg";

const About = ({ boardWidth }) => {
  const selectedAboutMenu = useSelector((state) => state.AboutMenuClick);

  return (
    <div className="section" id="about" data-anchor="about_page">
      <div
        className="background"
        style={{
          background: `url(${background_about}) no-repeat center`,
        }}
      ></div>
      <div className="result_board" style={{ width: boardWidth }}>
        {selectedAboutMenu.select === "profile" && <Profile />}
        {selectedAboutMenu.select === "design" && <Design />}
        {selectedAboutMenu.select === "front_end" && <FrontEnd />}
        {selectedAboutMenu.select === "back_end" && <BackEnd />}
      </div>
    </div>
  );
};

export default About;
