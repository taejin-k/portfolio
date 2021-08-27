// css
import './Profile.css';

const Profile = () => {
    return(
        <div className="profile">
            <div className="wrap">
                <div className="text">
                    <p className="title">PROFILE</p>
                    <p className="p"><span className="span">NAME</span>김태진</p>
                    <p className="p"><span className="span">ADDRESS</span>경기도 부천시</p>
                    <p className="p"><span className="span">E-MAIL</span>rhesus2016@gmail.com</p>
                    <p className="p"><span className="span">TEL</span>010 - 3934 - 5623</p>
                    <p className="p"><span className="span">GIT</span><a href="https://github.com/rhesus2017" rel="noreferrer" target="_blank">https://github.com/rhesus2017</a></p>
                    <p className="p"><span className="span">VELOG</span><a href="https://velog.io/@rhesus2016" rel="noreferrer" target="_blank">https://velog.io/@rhesus2016</a></p>
                    <span>-</span>
                    <div>
                        <div>
                        <p><span className="span" style={{marginRight: "0"}}>HISTORY</span></p>
                        </div>
                        <div>
                        <p className="history">2017.07 ~ 2018.03 : 강남 SBS컴퓨터아카데미</p>
                        <p className="history">2018.05 ~ : (주)피플아이 퍼블리싱 및 개발 업무</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;