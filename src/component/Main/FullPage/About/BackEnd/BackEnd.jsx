import "./BackEnd.css";

const BackEnd = () => {
  return (
    <div className="skill back_end">
      <div className="wrap">
        <div className="text">
          <p className="title">BACK-END</p>
          <div className="icon">
            <div>
              <div className="img">
                <img src="img/python.png" alt="python" />
              </div>
              <p>PYTHON</p>
            </div>
            <div>
              <div className="img">
                <img src="img/mysql.png" alt="mysql" />
              </div>
              <p>MYSQL</p>
            </div>
            <div>
              <div className="img">
                <img src="img/docker.png" alt="docker" />
              </div>
              <p>DOCKER</p>
            </div>
          </div>
          <div className="desc">
            <p>
              Python과 Mysql로 기본적인 Back-End 개발이 가능하며, Python Web
              FrameWork로는 Flask를 이용합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
