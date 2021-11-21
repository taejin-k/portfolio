// css
import './FrontEnd.css';

const FrontEnd = () => {
    return(
        <div className="skill front_end">
            <div className="wrap">
                <div className="text">
                    <p className="title">FRONT-END</p>
                    <div className="icon">
                        <div>
                            <div className="img"><img src='img/react.png' alt="react"/></div>
                            <p>REACT</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/js.png' alt="js"/></div>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/ts.png' alt="ts"/></div>
                            <p>TYPESCRIPT</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/html.png' alt="html" /></div>
                            <p>HTML</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/css.png' alt="css"/></div>
                            <p>CSS</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/sass.png' alt="sass"/></div>
                            <p>SASS</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/jquery.png' alt="jquery"/></div>
                            <p>JQUERY</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/wordpress.png' alt="wordpress"/></div>
                            <p>WORDPRESS</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/gnuboard.png' alt="gnuboard"/></div>
                            <p>GNUBOARD</p>
                        </div>
                        <div>
                            <div className="img"><img src='img/bootstrap.png' alt="bootstrap"/></div>
                            <p>BOOTSTRAP</p>
                        </div>
                    </div>
                    <div className="desc">
                        <p>React와 Javascript, Typescript 기반으로 전반적인 Front-End 개발이 가능합니다.</p>
                        <p>HTML과 CSS 그리고 jQuery를 이용한 퍼블리싱을 다수 진행한 경험이 있으며, Wordpress, Gnuboard, Bootstrap으로 사이트를 제작할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontEnd;