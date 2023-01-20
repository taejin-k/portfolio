import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { SetSlideNumber } from "../../../../action";
import "./Project.css";
import projectArrays from "../../../../json/ProjectArray.json";

const Project = ({ ProjectInBoardRef }) => {
  const dispatch = useDispatch();
  const setCount = (number) => dispatch(SetSlideNumber(number));
  const Count = useSelector((state) => state.SetSlideNumber);

  const setting = {
    speed: 500,
    swipeToSlide: true,
    afterChange: (index) => setCount(index),
    beforeChange: (index) => setCount(index),
  };

  const returnLastProjectIndex = () => {
    let number = projectArrays.length;

    if (number < 10) {
      number = "0" + String(number);
    } else {
      String(number);
    }

    return number;
  };

  const returnCurrentProjectIndex = () => {
    let number = Count.number + 1;

    if (number < 10) {
      number = "0" + String(number);
    } else {
      String(number);
    }

    return number;
  };

  return (
    <div id="project" className="fixed-box" ref={ProjectInBoardRef}>
      <h2>Project</h2>
      <div className="detail">
        <span className="num-now"># 02</span>
        <h3>PROJECT</h3>
        <span className="type">INTRODUCING MY PROJECT</span>
        <p className="number">
          <span>
            # {returnCurrentProjectIndex()} / {returnLastProjectIndex()}
          </span>
          <span>슬라이드를 넘기면 다음 프로젝트를 볼 수 있어요</span>
        </p>

        <Slider {...setting}>
          {projectArrays.map((project) => {
            return (
              <div className="slide" key={project.id}>
                <p className="company">{project.company}</p>
                <p className="name">{project.name}</p>
                <p className="skill">{project.skill}</p>
                {project.desc.map((desc, index) => {
                  return (
                    <p key={index} className="desc">
                      <span className="dot"></span>
                      <div>{desc}</div>
                    </p>
                  );
                })}
                <div className="link">
                  {project.link.map((link, index) => {
                    return link.button === "서비스 종료" ||
                      link.button === "비공개" ? (
                      <span key={index}>{link.button}</span>
                    ) : (
                      <a
                        key={index}
                        href={link.button === "서비스 종료" ? "" : link.url}
                        target="blank"
                      >
                        {link.button}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
