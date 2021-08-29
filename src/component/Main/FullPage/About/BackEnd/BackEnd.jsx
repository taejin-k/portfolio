// css
import './BackEnd.css';

const BackEnd = () => {
    return(
        <div className="skill back_end">
            <div className="wrap">
                <div className="text">
                    <p className="title">BACK-END</p>
                    <div className="icon">
                        <div>
                            <div className="img"><img src='/img/python.png' alt="python" /></div>
                            <p>PYTHON</p>
                        </div>
                        <div>
                            <div className="img"><img src='/img/mysql.png' alt="mysql"/></div>
                            <p>MYSQL</p>
                        </div>
                        <div>
                            <div className="img"><img src='/img/docker.png' alt="docker"/></div>
                            <p>DOCKER</p>
                        </div>
                    </div>
                    <div className="desc">
                        <p>Python과 Mysql을 사용하여 API를 개발할 수 있으며, Python Web FrameWork로는 Flask를 이용합니다.</p>
                        <p>Docker를 통해 Python Flask 개발 환경을 구성할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackEnd;