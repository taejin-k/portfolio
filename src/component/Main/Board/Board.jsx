import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";
import styled from "styled-components";

const Board = ({ BoardRef, pagingTopPosition, elementsInBoard }) => {
  return (
    <BoardStyled id="board" ref={BoardRef}>
      <div id="fp-nav-duplication">
        <i style={{ top: pagingTopPosition }}></i>
      </div>
      <Home HomeInBoardRef={elementsInBoard[0]} />
      <About AboutInBoardRef={elementsInBoard[1]} />
      <Project ProjectInBoardRef={elementsInBoard[2]} />
    </BoardStyled>
  );
};

export default Board;

const BoardStyled = styled.div`
  @keyframes home_up {
    0% {
      opacity: 0;
      top: 80%;
      transform: translateY(-80%);
      z-index: -999999;
    }
    100% {
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999999;
    }
  }
  @keyframes home_down {
    0% {
      opacity: 0;
      top: 30%;
      transform: translateY(-30%);
      z-index: -999999;
    }
    100% {
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999999;
    }
  }
  @keyframes up {
    0% {
      opacity: 0;
      top: 90%;
      transform: translateY(-90%);
      z-index: -999999;
    }
    100% {
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999999;
    }
  }
  @keyframes moreUp {
    0% {
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999999;
    }
    100% {
      opacity: 0;
      top: 10%;
      transform: translateY(-10%);
      z-index: -999999;
    }
  }
  @keyframes down {
    0% {
      opacity: 0;
      top: 10%;
      transform: translateY(-10%);
      z-index: -999999;
    }
    100% {
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999999;
    }
  }
  @keyframes moreDown {
    0% {
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999999;
    }
    100% {
      opacity: 0;
      top: 90%;
      transform: translateY(-90%);
      z-index: -999999;
    }
  }

  position: fixed;
  top: 30px;
  left: 30px;
  max-width: 760px;
  width: 40%;
  height: calc(100% - 60px);
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;

  #fp-nav-duplication {
    width: 274px;
    height: 322px;
    position: fixed;
    z-index: 100;
    top: 50%;
    opacity: 1;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translate3d(0, -50%, 0);
    right: -85px;

    i {
      display: block;
      width: 30px;
      height: 30px;
      border: 2px solid #000;
      border-radius: 50%;
      position: absolute;
      left: 48.5%;
      transform: translate(-50%, -50%);
      transition: 1s;
      transition-timing-function: ease;
    }
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;

    h2 {
      position: absolute;
      top: 30px;
      left: 50%;
      padding-right: 43px;
      font-size: 17px;
      display: none;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 40px;
        height: 2px;
        background: #222;
      }
    }

    .detail {
      width: 100%;
      position: absolute;
      padding: 0 13%;
      opacity: 0;
      cursor: default;

      .num-now {
        display: inline-block;
        font-size: 17px;
      }

      h3 {
        font-size: 70px;
      }

      .type {
        display: inline-block;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 60px;
      }
    }
  }

  .home_up {
    .detail {
      animation: home_up 0.8s forwards;
    }
  }

  .home_down {
    .detail {
      animation: home_down 0.5s forwards;
    }
  }

  .up {
    .detail {
      animation: up 0.5s forwards;
    }
  }

  .moreUp {
    .detail {
      animation: moreUp 0.5s forwards;
    }
  }

  .down {
    .detail {
      animation: down 0.5s forwards;
    }
  }

  .moreDown {
    .detail {
      animation: moreDown 0.5s forwards;
    }
  }
`;
