// css
import './Home.css';

const Home = ({ ResultBoardWidth }) => {

    return(
        <div className="section" id="home" data-anchor="home_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}></div>
        </div>
    )
}

export default Home;