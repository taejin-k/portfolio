import { Spin } from "antd";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Project.css";

const Project = ({ boardWidth }) => {
  const imgBoxRef = useRef(null);
  const Count = useSelector((state) => state.SetSlideNumber);
  const Loading = useSelector((state) => state.SetSlideCheck);

  useEffect(() => {
    imgBoxRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [Count.number]);

  return (
    <div className="section" id="project" data-anchor="project_page">
      <div
        className="background"
        style={{
          background: `url(img/background_project.jpeg) no-repeat center`,
        }}
      ></div>
      <div className="result_board" style={{ width: boardWidth }}>
        <div className="content">
          <div className={`loadingWrap ${Loading.check}`}>
            <Spin
              spinning={true}
              size="large"
              tip="이미지를 불러오는 중입니다"
            />
          </div>
          <div className={`contentWrap ${Loading.check}`}>
            <p>PREVIEW</p>
            <div
              className={
                "img_" + Count.number + ` scroll-active scrollbar_custom`
              }
              ref={imgBoxRef}
            >
              <img
                src={"img/slide_0.jpg"}
                alt="slide"
                className={`${Count.number === 0 && "active"}`}
              />
              <img
                src={"img/slide_1.jpg"}
                alt="slide"
                className={`${Count.number === 1 && "active"}`}
              />
              <img
                src={"img/slide_2.jpg"}
                alt="slide"
                className={`${Count.number === 2 && "active"}`}
              />
              <img
                src={"img/slide_3.jpg"}
                alt="slide"
                className={`${Count.number === 3 && "active"}`}
              />
              <img
                src={"img/slide_4.jpg"}
                alt="slide"
                className={`${Count.number === 4 && "active"}`}
              />
              <img
                src={"img/slide_5.jpg"}
                alt="slide"
                className={`${Count.number === 5 && "active"}`}
              />
              <img
                src={"img/slide_6.jpg"}
                alt="slide"
                className={`${Count.number === 6 && "active"}`}
              />
              <img
                src={"img/slide_7.jpg"}
                alt="slide"
                className={`${Count.number === 7 && "active"}`}
              />
              <img
                src={"img/slide_8.jpg"}
                alt="slide"
                className={`${Count.number === 8 && "active"}`}
              />
              <img
                src={"img/slide_9.jpg"}
                alt="slide"
                className={`${Count.number === 9 && "active"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
