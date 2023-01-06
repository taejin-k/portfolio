import "./Etc.css";

const Etc = () => {
  return (
    <div className="skill etc">
      <div className="wrap">
        <div className="text">
          <p className="title">ETC</p>
          <div className="icon">
            <div>
              <div className="img">
                <img src="img/python.png" alt="python" />
              </div>
              <p>PYTHON</p>
            </div>
            <div>
              <div className="img">
                <img src="img/git.png" alt="git" />
              </div>
              <p>GIT</p>
            </div>
            <div>
              <div className="img">
                <img src="img/sourcetree.png" alt="sourcetree" />
              </div>
              <p>SOURCETREE</p>
            </div>
            <div>
              <div className="img">
                <img src="img/postman.png" alt="postman" />
              </div>
              <p>POSTMAN</p>
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
              Python으로 Web Crawler을 만들 수 있습니다. 그리고 Uiautomation을
              기반으로 매크로 제작도 가능합니다.
            </p>
            <p>
              Git과 Sourcetree을 사용할 수 있습니다. Postman, PuTTY 등 개발에
              필요한 여러가지 툴을 사용할 수 있습니다.
            </p>
            <p>
              AWS와 GIT으로 웹을 배포할 수 있습니다. 그리고 AWS로 DB 인스턴스를
              생성해 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etc;
