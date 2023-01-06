// react
import Slider from "react-slick";

// redux
import { useSelector, useDispatch } from "react-redux";
import { SetSlideNumber } from "../../../../action";

// component
import Slide from "./Slide/Slide";

// css
import "./Project.css";

// json
import ProjectArrays from "../../../../json/ProjectArray.json";

const Project = ({ ProjectInBoardRef }) => {
  const dispatch = useDispatch();
  const setCount = (number) => {
    dispatch(SetSlideNumber(number));
  };
  const Count = useSelector((state) => state.SetSlideNumber);

  const setting = {
    speed: 500,
    swipeToSlide: true,
    afterChange: (index) => {
      setCount(index);
    },
    beforeChange: (index) => {
      setCount(index);
    },
  };

  const maxNumber = () => {
    let number = ProjectArrays.length;

    if (number < 10) {
      number = "0" + String(number);
    } else {
      String(number);
    }

    return number;
  };
  const currentNumber = () => {
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
            # {currentNumber()} / {maxNumber()}
          </span>
          <span>클릭해서 슬라이드를 넘겨주세요</span>
        </p>

        <Slider {...setting}>
          {ProjectArrays.map((ProjectArray) => {
            return <Slide key={ProjectArray.id} ProjectArray={ProjectArray} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
