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
              React와 Typescript, Javascript를 기반으로 전반적인 Front-End
              개발에 능숙하며, HTML과 CSS, Sass를 이용한 퍼블리싱을 다수 진행한
              경험이 있습니다.
            </p>
            <p>
              React-redux, Redux-toolkit, React-query 등 다양한 상태 관리 도구를
              사용할 수 있습니다. CSS-in-JS로는 Styled-Component를 주로
              사용합니다.
            </p>
            <p>
              웹뷰를 이용한 AOS, IOS 하이브리드 앱 제작 경험이 있으며, Ant
              Design 사용에 능숙합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
