import { useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import Design from "./Design/Design";
import FrontEnd from "./FrontEnd/FrontEnd";
import BackEnd from "./BackEnd/BackEnd";
import "./About.css";

const About = ({ boardWidth }) => {
  const selectedAboutMenu = useSelector((state) => state.AboutMenuClick);

  return (
    <div className="section" id="about" data-anchor="about_page">
      <div
        className="background"
        style={{
          background: `url(../img/background_about.jpeg) no-repeat center`,
          backgroundSize: "cover",
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
