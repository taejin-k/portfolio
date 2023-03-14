import "./Home.css";

const Home = ({ boardWidth }) => {
  return (
    <div className="section" id="home" data-anchor="home_page">
      <div
        className="background"
        style={{
          background: `url(../img/background_home.jpeg) no-repeat center`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="result_board" style={{ width: boardWidth }}></div>
    </div>
  );
};

export default Home;
