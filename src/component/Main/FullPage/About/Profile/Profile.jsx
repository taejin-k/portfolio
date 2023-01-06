import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="wrap">
        <div className="text">
          <p className="title">PROFILE</p>
          <p className="p">
            <span className="span">NAME</span>김태진
          </p>
          <p className="p">
            <span className="span">ADDRESS</span>경기도 성남시 태평동
          </p>
          <p className="p">
            <span className="span">E-MAIL</span>rhesus2016@gmail.com
          </p>
          <p className="p">
            <span className="span">TEL</span>010 - 3934 - 5623
          </p>
          <p className="p">
            <span className="span">GIT</span>
            <a
              href="https://github.com/rhesus2017"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/rhesus2017
            </a>
          </p>
          <span>*</span>
          <div>
            <div>
              <p>
                <span className="span" style={{ marginRight: "0" }}>
                  HISTORY
                </span>
              </p>
            </div>
            <div>
              <p className="history">
                2018.05 ~ 2021.09 : (주)피플아이
                <br />
                2021.12 ~ 2023.04 : (주)빅케어
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
