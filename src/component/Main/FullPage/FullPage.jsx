/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";
import "./FullPage.css";

const FullPage = ({
  BoardRef,
  setPagingTopPosition,
  elementsInBoard,
  setActiveMenu,
}) => {
  const [boardWidth, setBoardWidth] = useState();

  const returnWindowWidth = () => {
    const { innerWidth: width } = window;
    return { width };
  };

  const handleResize = () => {
    setBoardWidth(
      returnWindowWidth()["width"] - BoardRef.current.offsetWidth - 230
    );
  };

  const handlePageSlide = (a, b, c, d, e) => {
    setPagingTopPosition(a);
    elementsInBoard[b].current.childNodes[1].style.animationDelay = "0s";
    elementsInBoard[b].current.className = "fixed-box " + c;
    elementsInBoard[b].current.childNodes[0].style.display = "none";
    elementsInBoard[d].current.className = "fixed-box " + e;
    elementsInBoard[d].current.childNodes[0].style.display = "block";
    elementsInBoard[d].current.childNodes[1].style.animationDelay = ".5s";
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <ReactFullpage
      menu={"#gnb"}
      lockAnchors={true}
      anchors={["home_page", "about_page", "project_page"]}
      navigation={true}
      navigationPosition={"right"}
      scrollingSpeed={800}
      navigationTooltips={["Home", "About", "Project"]}
      showActiveTooltip={true}
      keyboardScrolling={true}
      normalScrollElements=".scroll-active"
      onLeave={(origin, destination, direction) => {
        if (destination.index === 0 && direction === "up") {
          handlePageSlide(
            "31.5%",
            origin.index,
            "moreDown",
            destination.index,
            "home_down"
          );
          setActiveMenu("home");
        } else if (destination.index === 1 && direction === "up") {
          handlePageSlide(
            "49%",
            origin.index,
            "moreDown",
            destination.index,
            "down"
          );
          setActiveMenu("about");
        } else if (destination.index === 1 && direction === "down") {
          handlePageSlide(
            "49%",
            origin.index,
            "moreUp",
            destination.index,
            "up"
          );
          setActiveMenu("about");
        } else if (destination.index === 2 && direction === "up") {
          handlePageSlide(
            "67%",
            origin.index,
            "moreDown",
            destination.index,
            "down"
          );
          setActiveMenu("project");
        } else if (destination.index === 2 && direction === "down") {
          handlePageSlide(
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
            <Home boardWidth={boardWidth} />
            <About boardWidth={boardWidth} />
            <Project boardWidth={boardWidth} />
          </div>
        );
      }}
    />
  );
};

export default FullPage;
