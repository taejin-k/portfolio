// react
import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// component
import Home from './Home/Home';
import About from './About/About';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';

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
        anchors = {['home_page', 'about_page', 'second_page', 'third_page', 'fourth_page']} // 앵커 아이디 값
        navigation = {true} // 페이징 생성
        navigationPosition = {"right"} // 페이징 위치 오른쪽
        scrollingSpeed = {800} // 스크롤 속도
        navigationTooltips = {['Home', 'About', 'Second', 'Third', 'Fourth']} // 툴팁 값
        showActiveTooltip = {true} // 툴팁 생성
        keyboardScrolling = {true} // 키보드 스크롤 정지
        onLeave={(origin, destination, direction) => {
          
          // Home
          if(destination.index === 0 && direction === 'up'){
            fullpage_slide('13.5%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('home');
            
          // About
          }else if(destination.index === 1 && direction === 'up'){
            fullpage_slide('31.5%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('about');
          }else if(destination.index === 1 && direction === 'down'){
            fullpage_slide('31.5%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('about');
            
          // Second
          }else if(destination.index === 2 && direction === 'up'){
            fullpage_slide('49%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('second');
          }else if(destination.index === 2 && direction === 'down'){
            fullpage_slide('49%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('second');
            
          // Third
          }else if(destination.index === 3 && direction === 'up'){
            fullpage_slide('67%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('third');
          }else if(destination.index === 3 && direction === 'down'){
            fullpage_slide('67%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('third');
            
          // Fourth
          }else if(destination.index === 4 && direction === 'up'){
            fullpage_slide('84.5%', origin.index, 'moreDown', destination.index, 'down');
            setActiveName('fourth');
          }else if(destination.index === 4 && direction === 'down'){
            fullpage_slide('84.5%', origin.index, 'moreUp', destination.index, 'up');
            setActiveName('fourth');
          }

        }}

        render={() => {
          return (
            <div>
              <Home ResultBoardWidth={ResultBoardWidth}/>
              <About ResultBoardWidth={ResultBoardWidth}/>
              <Second ResultBoardWidth={ResultBoardWidth}/>
              <Third ResultBoardWidth={ResultBoardWidth}/>
              <Fourth ResultBoardWidth={ResultBoardWidth}/>
            </div>
          );
        }}
      />
    )

}

export default FullPage;