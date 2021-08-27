// css
import './Design.css';

const Design = () => {
    return(
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
                        <p>포토샵과 일러스트의 기본적인 기능을 다룰 수 있으며, 디자이너와 함께 웹 디자인을 진행한 경험이 있습니다.</p>
                        <p>포토샵은 중급 정도의 실력입니다. 일러스트는 능숙하게 잘 쓰지는 못하지만, 간단한 로고 제작 등 기본적인 작업은 가능합니다.</p>
                        <p>포토샵과 일러스트를 사용할 수 있으므로, 디자이너와의 협업이 용이하다는 이점을 가지고 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;