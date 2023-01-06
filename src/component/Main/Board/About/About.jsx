import { useSelector, useDispatch } from "react-redux";
import { AboutMenuClick } from "../../../../action";
import "./About.css";

const About = ({ AboutInBoardRef }) => {
  const dispatch = useDispatch();
  const handleAboutMenuClick = (select) => dispatch(AboutMenuClick(select));
  const selectedAboutMenu = useSelector((state) => state.AboutMenuClick);

  return (
    <div id="about" className="fixed-box" ref={AboutInBoardRef}>
      <h2>About</h2>
      <div className="detail">
        <span className="num-now"># 01</span>
        <h3>ABOUT</h3>
        <span className="type">MY PROFILE AND SKILLS</span>
        <div className="board_menu">
          <div className="one">
            <div
              data-name="profile"
              className={selectedAboutMenu.select === "profile" ? "on" : ""}
              onClick={() => handleAboutMenuClick("profile")}
            >
              Profile
            </div>
          </div>
          <div className="one">
            <div
              data-name="design"
              className={selectedAboutMenu.select === "design" ? "on" : ""}
              onClick={() => handleAboutMenuClick("design")}
            >
              Design
            </div>
          </div>
          <div className="two">
            <div
              data-name="front_end"
              className={selectedAboutMenu.select === "front_end" ? "on" : ""}
              onClick={() => handleAboutMenuClick("front_end")}
            >
              Front-end
            </div>
            <div
              data-name="back_end"
              className={selectedAboutMenu.select === "back_end" ? "on" : ""}
              onClick={() => handleAboutMenuClick("back_end")}
            >
              Back-end
            </div>
          </div>
          <div className="one">
            <div
              data-name="etc"
              className={selectedAboutMenu.select === "etc" ? "on" : ""}
              onClick={() => handleAboutMenuClick("etc")}
            >
              Etc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
