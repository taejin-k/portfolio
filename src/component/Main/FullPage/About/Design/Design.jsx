import "./Design.css";

const Design = () => {
  return (
    <div className="skill design">
      <div className="wrap">
        <div className="text">
          <p className="title">DESIGN</p>
          <div className="icon">
            <div>
              <div className="img">
                <img src="img/ps.png" alt="ps" />
              </div>
              <p>PHOTOSHOP</p>
            </div>
            <div>
              <div className="img">
                <img src="img/figma.png" alt="figma" />
              </div>
              <p>FIGMA</p>
            </div>
          </div>
          <div className="desc">
            <p>포토샵과 피그마를 통한 기본적인 작업이 가능합니다.</p>
            <p>
              디자이너와 함께 웹디자인을 진행해온 경험이 있어, 협업 관련
              이해도가 높은 편입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
