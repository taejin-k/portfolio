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
                <img src="img/aws.png" alt="aws" />
              </div>
              <p>AWS</p>
            </div>
          </div>
          <div className="desc">
            <p>
              회원 가입, 로그인, 사용자 관리, 실시간 채팅 및 메세지 보내기 등
              간단한 웹 개발을 할 수 있습니다.
            </p>
            <p>
              Python으로 Web Crawler를 만들 수 있습니다. 또한, Uiautomation을
              기반으로 웹 매크로 제작도 가능합니다.
            </p>
            <p>
              AWS에서 제공하는 다양한 방식으로 작업 중인 웹을 배포할 수 있으며,
              AWS로 DB 인스턴스를 생성해 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
