import "./FrontEnd.css";

const FrontEnd = () => {
  return (
    <div className="skill front_end">
      <div className="wrap">
        <div className="text">
          <p className="title">FRONT-END</p>
          <div className="icon">
            <div>
              <div className="img">
                <img src="img/react.png" alt="react" />
              </div>
              <p>REACT</p>
            </div>
            <div>
              <div className="img">
                <img src="img/ts.png" alt="ts" />
              </div>
              <p>TYPESCRIPT</p>
            </div>
            <div>
              <div className="img">
                <img src="img/js.png" alt="js" />
              </div>
              <p>JAVASCRIPT</p>
            </div>
            <div>
              <div className="img">
                <img src="img/html.png" alt="html" />
              </div>
              <p>HTML</p>
            </div>
            <div>
              <div className="img">
                <img src="img/css.png" alt="css" />
              </div>
              <p>CSS</p>
            </div>
          </div>
          <div className="desc">
            <p>
              React, Typescript로 개발하며 React-redux, Redux-toolkit,
              React-query 등 다양한 상태 관리 도구를 사용할 수 있습니다.
            </p>
            <p>
              CSS-in-JS 라이브러리 Styled-Component, Emotion로 컴포넌트를
              스타일링 가능하고, Ant Design 사용에 능숙합니다.
            </p>
            <p>
              WebView를 이용한 하이브리드 앱 개발, 배포, 운영 경험이 있으며,
              HTML과 CSS, Sass를 이용한 퍼블리싱을 다수 진행했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
