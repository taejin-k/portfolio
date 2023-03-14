import "./Home.css";
import background_home from "../img/background_home.jpeg";

const Home = ({ boardWidth }) => {
  return (
    <div className="section" id="home" data-anchor="home_page">
      <div
        className="background"
        style={{
          background: `url(${background_home}) no-repeat center`,
        }}
      ></div>
      <div className="result_board" style={{ width: boardWidth }}></div>
    </div>
  );
};

export default Home;
