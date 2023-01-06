import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Project.css";

const Project = ({ boardWidth }) => {
  const imgBoxRef = useRef(null);
  const Count = useSelector((state) => state.SetSlideNumber);

  useEffect(() => {
    imgBoxRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [Count.number]);

  return (
    <div className="section" id="project" data-anchor="project_page">
      <div className="background"></div>
      <div className="result_board" style={{ width: boardWidth }}>
        <div className="content">
          <p>PREVEIW</p>
          <div
            className={
              "img_" + Count.number + " scroll-active scrollbar_custom"
            }
            ref={imgBoxRef}
          >
            <span>스크롤을 내려서 PREVIEW를 확인해주세요</span>
            <img src={"img/slide_" + Count.number + ".jpg"} alt="slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
