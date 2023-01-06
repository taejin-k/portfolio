import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";
import "./Board.css";

const Board = ({ BoardRef, pagingTopPosition, elementsInBoard }) => {
  return (
    <div id="board" ref={BoardRef}>
      <div id="fp-nav-duplication">
        <i style={{ top: pagingTopPosition }}></i>
      </div>
      <Home HomeInBoardRef={elementsInBoard[0]} />
      <About AboutInBoardRef={elementsInBoard[1]} />
      <Project ProjectInBoardRef={elementsInBoard[2]} />
    </div>
  );
};

export default Board;
