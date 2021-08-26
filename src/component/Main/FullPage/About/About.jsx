// redux
import { useSelector, useDispatch } from 'react-redux';
import { AboutMenuClick } from '../../../../action';

// css
import './About.css';

const About = ({ ResultBoardWidth }) => {

    const dispatch = useDispatch();
    const aboutMenuClick = (select) => { dispatch(AboutMenuClick(select)); }
    const selectMenu = useSelector(state => state.AboutMenuClick)

    return(
        <div className="section" id="about" data-anchor="about_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}>

                {
                selectMenu.select === 'profile' &&
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
                }
                {
                selectMenu.select === 'design' &&
                    <div className="skill design">
                    <div className="wrap">
                        <div className="text">
                        <p className="title">DESIGN</p>
                        <div className="icon">
                            <div>
                            <div className="img"><img src='/img/ps.png' alt="ps"/></div>
                            <p>PHOTOSHOP</p>
                            <span><span></span></span>
                            </div>
                            <div>
                            <div className="img"><img src='/img/ai.png' alt="ai"/></div>
                            <p>ILLUSTRATOR</p>
                            <span><span></span></span>
                            </div>
                        </div>
                        <div className="desc">
                            <p>포토샵과 일러스트의 기본적인 기능을 다룰 수 있으며, 디자이너와 함께 웹 디자인한 경험이 있습니다.</p>
                            <p>포토샵은 중급과 고급 사이 정도의 실력입니다. 일러스트는 수월하게 잘 다루지는 못하지만, 간단한 로고 제작 등 기본적인 작업 가능합니다.</p>
                            <p>포토샵과 일러스트를 다룰 수 있으므로, 디자이너와의 협업이 용이하다는 이점을 가지고 있습니다.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                }
                {
                selectMenu.select === 'front_end' &&
                <div className="skill front_end">
                <div className="wrap">
                    <div className="text">
                    <p className="title">FRONT-END</p>
                    <div className="icon">
                        <div>
                        <div className="img"><img src='/img/html.png' alt="html" /></div>
                        <p>HTML</p>
                        <span><span></span></span>
                        </div>
                        <div>
                        <div className="img"><img src='/img/css.png' alt="css"/></div>
                        <p>CSS</p>
                        <span><span></span></span>
                        </div>
                        <div>
                        <div className="img"><img src='/img/sass.png' alt="sass"/></div>
                        <p>SASS</p>
                        <span><span></span></span>
                        </div>
                        <div>
                        <div className="img"><img src='/img/jquery.png' alt="jquery"/></div>
                        <p>JQUERY</p>
                        <span><span></span></span>
                        </div>
                        <div>
                        <div className="img"><img src='/img/js.png' alt="js"/></div>
                        <p>JAVASCRIPT</p>
                        <span><span></span></span>
                        </div>
                    </div>
                    <div className="desc">
                        <p>HTML, CSS, jQuery, SASS를 능숙하게 사용할 수 있으며 워드프레스, 그누보드, 부트스트랩으로 사이트를 제작한 경험이 있습니다.</p>
                    </div>
                    </div>
                </div>
                </div>
                }
                {
                selectMenu.select === 'back_end' &&
                <div className="skill back_end">
                <div className="wrap">
                    <div className="text">
                    <p className="title">BACK-END</p>
                    </div>
                </div>
                </div>
                }
                {
                selectMenu.select === 'crawling' &&
                <div className="skill crawling">
                <div className="wrap">
                    <div className="text">
                    <p className="title">BACK-END</p>
                    </div>
                </div>
                </div>
                }
                {
                selectMenu.select === 'etc' &&
                <div className="skill etc">
                <div className="wrap">
                    <div className="text">
                    <p className="title">BACK-END</p>
                    </div>
                </div>
                </div>
                }

            </div>
            </div>
    )
}

export default About;