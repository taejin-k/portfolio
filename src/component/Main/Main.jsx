import { useRef, useState } from "react";
import Board from "./Board/Board";
import FullPage from "./FullPage/FullPage";

const Main = ({ setActiveMenu }) => {
  const BoardRef = useRef(null);
  const HomeInBoardRef = useRef(null);
  const AboutInBoardRef = useRef(null);
  const ProjectInBoardRef = useRef(null);
  const elementsInBoard = [HomeInBoardRef, AboutInBoardRef, ProjectInBoardRef];
  const [pagingTopPosition, setPagingTopPosition] = useState("31.5%");

  return (
    <div className="main">
      <main>
        <Board
          BoardRef={BoardRef}
          pagingTopPosition={pagingTopPosition}
          elementsInBoard={elementsInBoard}
        />
        <FullPage
          BoardRef={BoardRef}
          setPagingTopPosition={setPagingTopPosition}
          elementsInBoard={elementsInBoard}
          setActiveMenu={setActiveMenu}
        />
      </main>
    </div>
  );
};

export default Main;
