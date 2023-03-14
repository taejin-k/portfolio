import "./Home.css";

const Home = ({ HomeInBoardRef }) => {
  return (
    <div id="home" className="fixed-box home_up" ref={HomeInBoardRef}>
      <h2>Home</h2>
      <div className="detail">
        <h3>
          ****
          <br />
          PORTFOLIO
        </h3>
        <p className="text">
          포트폴리오 최신화 날짜는 <b>2023. 02. 08</b> 입니다
        </p>
      </div>
    </div>
  );
};

export default Home;
