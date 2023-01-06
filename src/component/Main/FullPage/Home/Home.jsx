import "./Home.css";

const Home = ({ boardWidth }) => {
  return (
    <div className="section" id="home" data-anchor="home_page">
      <div className="background"></div>
      <div className="result_board" style={{ width: boardWidth }}></div>
    </div>
  );
};

export default Home;
