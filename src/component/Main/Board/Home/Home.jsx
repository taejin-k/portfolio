// css
import './Home.css';

const Home = ({ HomeFixedBoxRef }) => {

    return(
        <div id='home' className="fixed-box home_up" ref={HomeFixedBoxRef}>
            <h2>Home</h2>
            <div className="detail">
                <h3>****<br />PORTFOLIO</h3>
                <p className="text">안녕하세요. 김태진의 포트폴리오 사이트입니다.</p>
            </div>
        </div>  
    )
}

export default Home;