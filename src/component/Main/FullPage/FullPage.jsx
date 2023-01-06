// react
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// component
import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";

// css
import "./FullPage.css";

const FullPage = ({
  BoardRef,
  setPagingTopPosition,
  elementsInBoard,
  setActiveMenu,
}) => {
  function getWindowWidth() {
    const { innerWidth: width } = window;
    return { width };
  }

  function SetBoardResultWidth() {
    const [ResultBoardWidthState, setResultBoardWidthState] = useState();

    useEffect(() => {
      function handleResize() {
        setResultBoardWidthState(
          getWindowWidth()["width"] - BoardRef.current.offsetWidth - 230
        );
      }
      setResultBoardWidthState(
        getWindowWidth()["width"] - BoardRef.current.offsetWidth - 230
      );
      window.addEventListener("resize", handleResize);
    }, []);

    return ResultBoardWidthState;
  }

  const ResultBoardWidth = SetBoardResultWidth();

  function fullpage_slide(a, b, c, d, e) {
    // 페이징 active 위치
    setPagingTopPosition(a);

    // 애니메이션 클래스 초기화
    elementsInBoard[b].current.childNodes[1].style.animationDelay = "0s";

    // 스크롤 방향에 따른 애니메이션
    elementsInBoard[b].current.className = "fixed-box " + c;
    elementsInBoard[b].current.childNodes[0].style.display = "none";
    elementsInBoard[d].current.className = "fixed-box " + e;
    elementsInBoard[d].current.childNodes[0].style.display = "block";
    elementsInBoard[d].current.childNodes[1].style.animationDelay = ".5s";
  }

  return (
    <ReactFullpage
      menu={"#gnb"} // 메뉴 연동
      lockAnchors={true} // 페이징에 앵커 적용
      anchors={["home_page", "about_page", "project_page"]} // 앵커 아이디 값
      navigation={true} // 페이징 생성
      navigationPosition={"right"} // 페이징 위치 오른쪽
      scrollingSpeed={800} // 스크롤 속도
      navigationTooltips={["Home", "About", "Project"]} // 툴팁 값
      showActiveTooltip={true} // 툴팁 생성
      keyboardScrolling={true} // 키보드 스크롤 정지
      normalScrollElements=".scroll-active"
      onLeave={(origin, destination, direction) => {
        // Home
        if (destination.index === 0 && direction === "up") {
          fullpage_slide(
            "31.5%",
            origin.index,
            "moreDown",
            destination.index,
            "home_down"
          );
          setActiveMenu("home");

          // About
        } else if (destination.index === 1 && direction === "up") {
          fullpage_slide(
            "49%",
            origin.index,
            "moreDown",
            destination.index,
            "down"
          );
          setActiveMenu("about");
        } else if (destination.index === 1 && direction === "down") {
          fullpage_slide(
            "49%",
            origin.index,
            "moreUp",
            destination.index,
            "up"
          );
          setActiveMenu("about");

          // Project
        } else if (destination.index === 2 && direction === "up") {
          fullpage_slide(
            "67%",
            origin.index,
            "moreDown",
            destination.index,
            "down"
          );
          setActiveMenu("project");
        } else if (destination.index === 2 && direction === "down") {
          fullpage_slide(
            "67%",
            origin.index,
            "moreUp",
            destination.index,
            "up"
          );
          setActiveMenu("project");
        }
      }}
      render={() => {
        return (
          <div>
            <Home ResultBoardWidth={ResultBoardWidth} />
            <About ResultBoardWidth={ResultBoardWidth} />
            <Project ResultBoardWidth={ResultBoardWidth} />
          </div>
        );
      }}
    />
  );
};

export default FullPage;
