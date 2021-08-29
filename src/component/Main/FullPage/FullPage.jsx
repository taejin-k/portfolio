// react
import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// component
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import End from './End/End';

// css
import './FullPage.css';

const FullPage = ({ BoardRef, setPagingTop, fixedBoxRefArray, setActiveName }) => {

    function getWindowWidth() {
      const { innerWidth: width } = window;
      return { width };
    }
    
    function SetBoardResultWidth() {
      const [ ResultBoardWidthState, setResultBoardWidthState ] = useState();
    
      useEffect(() => {
        function handleResize() {
          setResultBoardWidthState(getWindowWidth()["width"] - BoardRef.current.offsetWidth - 230);
        }
        setResultBoardWidthState(getWindowWidth()["width"] - BoardRef.current.offsetWidth - 230)
        window.addEventListener("resize", handleResize);
      }, []);
    
      return ResultBoardWidthState;
    }

    const ResultBoardWidth = SetBoardResultWidth();

    function fullpage_slide(a, b, c, d, e){

      // 페이징 active 위치
      setPagingTop(a);

      // 애니메이션 클래스 초기화
      fixedBoxRefArray[b].current.childNodes[1].style.animationDelay = '0s';

      // 스크롤 방향에 따른 애니메이션
      fixedBoxRefArray[b].current.className = 'fixed-box ' + c;
      fixedBoxRefArray[b].current.childNodes[0].style.display = 'none';
      fixedBoxRefArray[d].current.className = 'fixed-box ' + e;
      fixedBoxRefArray[d].current.childNodes[0].style.display = 'block';
      fixedBoxRefArray[d].current.childNodes[1].style.animationDelay = '.5s'; 

      // 엑티브 된 페이지만 display: block;
      setTimeout(function(){
        fixedBoxRefArray[b].current.childNodes[1].style.display = 'none';
      }, 500);
      fixedBoxRefArray[d].current.childNodes[1].style.display = 'block';


    }
    
    return(
      
      <ReactFullpage
        menu = {"#gnb"} // 메뉴 연동
        lockAnchors = {true} // 페이징에 앵커 적용
        anchors = {['home_page', 'about_page', 'project_page', 'end_page']} // 앵커 아이디 값
        navigation = {true} // 페이징 생성
        navigationPosition = {"right"} // 페이징 위치 오른쪽
        scrollingSpeed = {800} // 스크롤 속도
        navigationTooltips = {['Home', 'About', 'Project', 'End']} // 툴팁 값
        showActiveTooltip = {true} // 툴팁 생성
        keyboardScrolling = {true} // 키보드 스크롤 정지
        onLeave={(origin, destination, direction) => {
          
          // Home
          if(destination.index === 0 && direction === 'up'){
            fullpage_slide('22.5%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('home');
            
          // About
          }else if(destination.index === 1 && direction === 'up'){
            fullpage_slide('40.5%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('about');
          }else if(destination.index === 1 && direction === 'down'){
            fullpage_slide('40.5%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('about');
            
          // Project
          }else if(destination.index === 2 && direction === 'up'){
            fullpage_slide('58%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('project');
          }else if(destination.index === 2 && direction === 'down'){
            fullpage_slide('58%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('project');
            
          // End
          }else if(destination.index === 3 && direction === 'up'){
            fullpage_slide('76%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('end');
          }else if(destination.index === 3 && direction === 'down'){
            fullpage_slide('76%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('end');
          }

        }}

        render={() => {
          return (
            <div>
              <Home ResultBoardWidth={ResultBoardWidth}/>
              <About ResultBoardWidth={ResultBoardWidth}/>
              <Project ResultBoardWidth={ResultBoardWidth}/>
              <End ResultBoardWidth={ResultBoardWidth}/>
            </div>
          );
        }}
      />
    )

}

export default FullPage;