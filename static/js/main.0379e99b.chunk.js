(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(n,e,t){},102:function(n,e,t){},103:function(n,e,t){"use strict";t.r(e);var s=t(29),i=t.n(s),c=t(30),a=t(10),r=t(16),o="ABOUT_MENU_CLICK",l="SET_SLIDE_NUMBER",d="SET_SLIDE_CHECK";var j,b,m={select:"profile"},p={number:0},h={check:!1},u=Object(c.a)({AboutMenuClick:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(r.a)(Object(r.a)({},n),{},{select:e.payload});default:return n}},SetSlideNumber:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(r.a)(Object(r.a)({},n),{},{number:e.payload});default:return n}},SetSlideCheck:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(r.a)(Object(r.a)({},n),{},{check:e.payload});default:return n}}}),x=t(1),O=t(60),g=t(4),f=t(7),v=t(31),N=t(32),y=t(0),k=function(n){var e=n.activeMenu,t=n.setActiveMenu,s=Object(x.useState)(!1),i=Object(f.a)(s,2),c=i[0],a=i[1];return Object(y.jsxs)(S,{children:[Object(y.jsxs)("h1",{className:"name",children:[Object(y.jsx)("em",{children:"KIM"}),"TAEJIN"]}),Object(y.jsx)("div",{className:c?"menu open":"menu",onClick:function(){return a((function(n){return!n}))},children:Object(y.jsxs)("button",{type:"button",children:[Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{})]})}),Object(y.jsx)("nav",{id:"gnb",className:"nav",children:Object(y.jsx)("ul",{children:["home","about","project"].map((function(n){return Object(y.jsx)("li",{className:e===n?"on":"",children:Object(y.jsx)("span",{"data-menuanchor":"".concat(n,"_page"),onClick:function(){return function(n){t(n),a(!1)}(n)},children:n.toUpperCase()})},n)}))})})]})},S=N.a.header(j||(j=Object(v.a)(["\n  .name {\n    position: absolute;\n    top: 56px;\n    left: 110px;\n    font-size: 2.5rem;\n    font-weight: lighter;\n    z-index: 4;\n\n    em {\n      font-weight: bold;\n      font-style: normal;\n    }\n  }\n\n  .menu {\n    position: absolute;\n    top: 58px;\n    left: 60px;\n    width: 30px;\n    height: 25px;\n    z-index: 4;\n\n    button {\n      position: relative;\n      display: block;\n      width: 100%;\n      height: 100%;\n      border: none;\n      background: none;\n      box-shadow: none;\n      cursor: pointer;\n\n      span {\n        display: block;\n        width: 100%;\n        height: 5px;\n        background: #222;\n        transition: 0.3s;\n\n        &:nth-of-type(2) {\n          margin: 5px 0;\n        }\n      }\n    }\n\n    &.open {\n      + .nav {\n        left: 30px;\n        opacity: 1;\n      }\n\n      button {\n        span {\n          &:nth-of-type(1) {\n            position: absolute;\n            top: 10px;\n            left: 0;\n            transform: rotate(45deg);\n          }\n\n          &:nth-of-type(2) {\n            display: none;\n          }\n\n          &:nth-of-type(3) {\n            position: absolute;\n            top: 10px;\n            left: 0;\n            transform: rotate(-45deg);\n          }\n        }\n      }\n    }\n  }\n\n  .nav {\n    position: absolute;\n    top: 30px;\n    left: -760px;\n    max-width: 760px;\n    width: 40%;\n    height: calc(100vh - 60px);\n    z-index: 3;\n    transition: 0.5s ease;\n    opacity: 0;\n\n    ul {\n      width: 100%;\n      height: 100%;\n      padding: 145px 21%;\n      background: #e0e0e0;\n\n      li {\n        line-height: 70px;\n        width: 100%;\n\n        span {\n          display: inline-block;\n          font-size: 40px;\n          color: #9b9b9b;\n          font-weight: bold;\n          cursor: pointer;\n\n          &:hover {\n            color: #222;\n          }\n        }\n\n        &.on {\n          span {\n            color: #222;\n          }\n        }\n      }\n    }\n  }\n"]))),w=(t(75),function(n){var e=n.HomeInBoardRef;return Object(y.jsxs)("div",{id:"home",className:"fixed-box home_up",ref:e,children:[Object(y.jsx)("h2",{children:"Home"}),Object(y.jsxs)("div",{className:"detail",children:[Object(y.jsxs)("h3",{children:["****",Object(y.jsx)("br",{}),"PORTFOLIO"]}),Object(y.jsxs)("p",{className:"text",children:["\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \ucd5c\uc2e0\ud654 \ub0a0\uc9dc\ub294 ",Object(y.jsx)("b",{children:"2023. 01. 20"})," \uc785\ub2c8\ub2e4"]})]})]})}),T=(t(76),function(n){var e=n.AboutInBoardRef,t=Object(a.b)(),s=function(n){return t(function(n){return{type:o,payload:n}}(n))},i=Object(a.c)((function(n){return n.AboutMenuClick}));return Object(y.jsxs)("div",{id:"about",className:"fixed-box",ref:e,children:[Object(y.jsx)("h2",{children:"About"}),Object(y.jsxs)("div",{className:"detail",children:[Object(y.jsx)("span",{className:"num-now",children:"# 01"}),Object(y.jsx)("h3",{children:"ABOUT"}),Object(y.jsx)("span",{className:"type",children:"MY PROFILE AND SKILLS"}),Object(y.jsxs)("div",{className:"board_menu",children:[Object(y.jsx)("div",{className:"one",children:Object(y.jsx)("div",{"data-name":"profile",className:"profile"===i.select?"on":"",onClick:function(){return s("profile")},children:"Profile"})}),Object(y.jsx)("div",{className:"one",children:Object(y.jsx)("div",{"data-name":"design",className:"design"===i.select?"on":"",onClick:function(){return s("design")},children:"Design"})}),Object(y.jsxs)("div",{className:"two",children:[Object(y.jsx)("div",{"data-name":"front_end",className:"front_end"===i.select?"on":"",onClick:function(){return s("front_end")},children:"Front-end"}),Object(y.jsx)("div",{"data-name":"back_end",className:"back_end"===i.select?"on":"",onClick:function(){return s("back_end")},children:"Back-end"})]})]})]})]})}),A=t(50),I=t.n(A),E=(t(92),t(39)),R=function(n){var e=n.ProjectInBoardRef,t=Object(a.b)(),s=function(n){return t(function(n){return{type:l,payload:n}}(n))},i=function(n){return t(function(n){return{type:d,payload:n}}(n))},c=Object(a.c)((function(n){return n.SetSlideNumber})),o={speed:300,swipeToSlide:!0,afterChange:function(n){s(n)},beforeChange:function(n){s(n+1),i(!0),setTimeout((function(){i(!1)}),800)}};return Object(y.jsxs)("div",{id:"project",className:"fixed-box",ref:e,children:[Object(y.jsx)("h2",{children:"Project"}),Object(y.jsxs)("div",{className:"detail",children:[Object(y.jsx)("span",{className:"num-now",children:"# 02"}),Object(y.jsx)("h3",{children:"PROJECT"}),Object(y.jsx)("span",{className:"type",children:"INTRODUCING MY PROJECT"}),Object(y.jsxs)("p",{className:"number",children:[Object(y.jsxs)("span",{children:["# ",function(){var n=c.number+1;return n<10?n="0"+String(n):String(n),n}()," / ",function(){var n=E.length;return n<10?n="0"+String(n):String(n),n}()]}),Object(y.jsx)("span",{children:"\uc2ac\ub77c\uc774\ub4dc\ub97c \ub118\uae30\uba74 \ub2e4\uc74c \ud504\ub85c\uc81d\ud2b8\ub97c \ubcfc \uc218 \uc788\uc5b4\uc694"})]}),Object(y.jsx)(I.a,Object(r.a)(Object(r.a)({},o),{},{children:E.map((function(n){return Object(y.jsxs)("div",{className:"slide",children:[Object(y.jsx)("p",{className:"company",children:n.company}),Object(y.jsx)("p",{className:"name",children:n.name}),Object(y.jsx)("p",{className:"skill",children:n.skill}),n.desc.map((function(n,e){return Object(y.jsxs)("p",{className:"desc",children:[Object(y.jsx)("span",{className:"dot"}),Object(y.jsx)("div",{children:n})]},e)})),Object(y.jsx)("div",{className:"link",children:n.link.map((function(n,e){return"\uc11c\ube44\uc2a4 \uc885\ub8cc"===n.button||"\ube44\uacf5\uac1c"===n.button?Object(y.jsx)("span",{children:n.button},e):Object(y.jsx)("a",{href:"\uc11c\ube44\uc2a4 \uc885\ub8cc"===n.button?"":n.url,target:"blank",children:n.button},e)}))})]},n.id)}))}))]})]})},_=function(n){var e=n.BoardRef,t=n.pagingTopPosition,s=n.elementsInBoard;return Object(y.jsxs)(C,{id:"board",ref:e,children:[Object(y.jsx)("div",{id:"fp-nav-duplication",children:Object(y.jsx)("i",{style:{top:t}})}),Object(y.jsx)(w,{HomeInBoardRef:s[0]}),Object(y.jsx)(T,{AboutInBoardRef:s[1]}),Object(y.jsx)(R,{ProjectInBoardRef:s[2]})]})},C=N.a.div(b||(b=Object(v.a)(['\n  @keyframes home_up {\n    0% {\n      opacity: 0;\n      top: 80%;\n      transform: translateY(-80%);\n      z-index: -999999;\n    }\n    100% {\n      opacity: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 999999;\n    }\n  }\n  @keyframes home_down {\n    0% {\n      opacity: 0;\n      top: 30%;\n      transform: translateY(-30%);\n      z-index: -999999;\n    }\n    100% {\n      opacity: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 999999;\n    }\n  }\n  @keyframes up {\n    0% {\n      opacity: 0;\n      top: 90%;\n      transform: translateY(-90%);\n      z-index: -999999;\n    }\n    100% {\n      opacity: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 999999;\n    }\n  }\n  @keyframes moreUp {\n    0% {\n      opacity: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 999999;\n    }\n    100% {\n      opacity: 0;\n      top: 10%;\n      transform: translateY(-10%);\n      z-index: -999999;\n    }\n  }\n  @keyframes down {\n    0% {\n      opacity: 0;\n      top: 10%;\n      transform: translateY(-10%);\n      z-index: -999999;\n    }\n    100% {\n      opacity: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 999999;\n    }\n  }\n  @keyframes moreDown {\n    0% {\n      opacity: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 999999;\n    }\n    100% {\n      opacity: 0;\n      top: 90%;\n      transform: translateY(-90%);\n      z-index: -999999;\n    }\n  }\n\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  max-width: 760px;\n  width: 40%;\n  height: calc(100% - 60px);\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1;\n\n  #fp-nav-duplication {\n    width: 274px;\n    height: 322px;\n    position: fixed;\n    z-index: 100;\n    top: 50%;\n    opacity: 1;\n    transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -webkit-transform: translate3d(0, -50%, 0);\n    right: -85px;\n\n    i {\n      display: block;\n      width: 30px;\n      height: 30px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      position: absolute;\n      left: 48.5%;\n      transform: translate(-50%, -50%);\n      transition: 1s;\n      transition-timing-function: ease;\n    }\n  }\n\n  > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n\n    h2 {\n      position: absolute;\n      top: 30px;\n      left: 50%;\n      padding-right: 43px;\n      font-size: 17px;\n      display: none;\n\n      &:after {\n        content: "";\n        position: absolute;\n        top: 50%;\n        right: 0;\n        width: 40px;\n        height: 2px;\n        background: #222;\n      }\n    }\n\n    .detail {\n      width: 100%;\n      position: absolute;\n      padding: 0 13%;\n      opacity: 0;\n      cursor: default;\n\n      .num-now {\n        display: inline-block;\n        font-size: 17px;\n      }\n\n      h3 {\n        font-size: 70px;\n      }\n\n      .type {\n        display: inline-block;\n        font-size: 25px;\n        font-weight: 700;\n        margin-bottom: 60px;\n      }\n    }\n  }\n\n  .home_up {\n    .detail {\n      animation: home_up 0.8s forwards;\n    }\n  }\n\n  .home_down {\n    .detail {\n      animation: home_down 0.5s forwards;\n    }\n  }\n\n  .up {\n    .detail {\n      animation: up 0.5s forwards;\n    }\n  }\n\n  .moreUp {\n    .detail {\n      animation: moreUp 0.5s forwards;\n    }\n  }\n\n  .down {\n    .detail {\n      animation: down 0.5s forwards;\n    }\n  }\n\n  .moreDown {\n    .detail {\n      animation: moreDown 0.5s forwards;\n    }\n  }\n']))),P=t(51),W=t.n(P),Y=(t(93),function(n){var e=n.boardWidth;return Object(y.jsxs)("div",{className:"section",id:"home","data-anchor":"home_page",children:[Object(y.jsx)("div",{className:"background"}),Object(y.jsx)("div",{className:"result_board",style:{width:e}})]})}),M=(t(94),function(){return Object(y.jsx)("div",{className:"profile",children:Object(y.jsx)("div",{className:"wrap",children:Object(y.jsxs)("div",{className:"text",children:[Object(y.jsx)("p",{className:"title",children:"PROFILE"}),Object(y.jsxs)("p",{className:"p",children:[Object(y.jsx)("span",{className:"span",children:"NAME"}),"\uae40\ud0dc\uc9c4"]}),Object(y.jsxs)("p",{className:"p",children:[Object(y.jsx)("span",{className:"span",children:"ADDRESS"}),"\uacbd\uae30\ub3c4 \uc131\ub0a8\uc2dc \ud0dc\ud3c9\ub3d9"]}),Object(y.jsxs)("p",{className:"p",children:[Object(y.jsx)("span",{className:"span",children:"E-MAIL"}),"rhesus2016@gmail.com"]}),Object(y.jsxs)("p",{className:"p",children:[Object(y.jsx)("span",{className:"span",children:"TEL"}),"010 - 3934 - 5623"]}),Object(y.jsxs)("p",{className:"p",children:[Object(y.jsx)("span",{className:"span",children:"GIT"}),Object(y.jsx)("a",{href:"https://github.com/rhesus2017",rel:"noreferrer",target:"_blank",children:"https://github.com/rhesus2017"})]}),Object(y.jsx)("span",{children:"*"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)("p",{children:Object(y.jsx)("span",{className:"span",style:{marginRight:"0"},children:"HISTORY"})})}),Object(y.jsx)("div",{children:Object(y.jsxs)("p",{className:"history",children:["2018.05 ~ 2021.09 : (\uc8fc)\ud53c\ud50c\uc544\uc774",Object(y.jsx)("br",{}),"2021.12 ~ 2023.04 : (\uc8fc)\ube45\ucf00\uc5b4"]})})]})]})})})}),B=(t(95),function(){return Object(y.jsx)("div",{className:"skill design",children:Object(y.jsx)("div",{className:"wrap",children:Object(y.jsxs)("div",{className:"text",children:[Object(y.jsx)("p",{className:"title",children:"DESIGN"}),Object(y.jsxs)("div",{className:"icon",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/ps.png",alt:"ps"})}),Object(y.jsx)("p",{children:"PHOTOSHOP"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/ai.png",alt:"ai"})}),Object(y.jsx)("p",{children:"ILLUSTRATOR"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/figma.png",alt:"figma"})}),Object(y.jsx)("p",{children:"FIGMA"})]})]}),Object(y.jsxs)("div",{className:"desc",children:[Object(y.jsx)("p",{children:"\ud3ec\ud1a0\uc0f5\uacfc \ud53c\uadf8\ub9c8 \uadf8\ub9ac\uace0 \uc77c\ub7ec\uc2a4\ud2b8\ub808\uc774\ud130\ub97c \ud1b5\ud55c \uae30\ubcf8\uc801\uc778 \uc791\uc5c5\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),Object(y.jsx)("p",{children:"\ub514\uc790\uc774\ub108\uc640 \ud568\uaed8 \uc6f9\ub514\uc790\uc778\uc744 \uc9c4\ud589\ud574\uc628 \uacbd\ud5d8\uc774 \uc788\uc5b4, \ud611\uc5c5 \uad00\ub828 \uc774\ud574\ub3c4\uac00 \ub192\uc740 \ud3b8\uc785\ub2c8\ub2e4."})]})]})})})}),D=(t(96),function(){return Object(y.jsx)("div",{className:"skill front_end",children:Object(y.jsx)("div",{className:"wrap",children:Object(y.jsxs)("div",{className:"text",children:[Object(y.jsx)("p",{className:"title",children:"FRONT-END"}),Object(y.jsxs)("div",{className:"icon",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/html.png",alt:"html"})}),Object(y.jsx)("p",{children:"HTML"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/css.png",alt:"css"})}),Object(y.jsx)("p",{children:"CSS"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/sass.png",alt:"sass"})}),Object(y.jsx)("p",{children:"SASS"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/js.png",alt:"js"})}),Object(y.jsx)("p",{children:"JAVASCRIPT"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/ts.png",alt:"ts"})}),Object(y.jsx)("p",{children:"TYPESCRIPT"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/react.png",alt:"react"})}),Object(y.jsx)("p",{children:"REACT"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/antd.png",alt:"antd"})}),Object(y.jsx)("p",{children:"ANT DESIGN"})]})]}),Object(y.jsxs)("div",{className:"desc",children:[Object(y.jsx)("p",{children:"React\uc640 Javascript, Typescript\ub97c \uae30\ubc18\uc73c\ub85c \uc804\ubc18\uc801\uc778 Front-End \uac1c\ubc1c\uc5d0 \ub2a5\uc219\ud569\ub2c8\ub2e4. \ub610\ud55c, \uc6f9\ubdf0\ub97c \uc774\uc6a9\ud55c AOS, IOS \ud558\uc774\ube0c\ub9ac\ub4dc \uc571 \uc81c\uc791 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),Object(y.jsx)("p",{children:"react-redux, redux-toolkit, react-query \ub4f1 \ub2e4\uc591\ud55c \uc0c1\ud0dc \uad00\ub9ac \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(y.jsx)("p",{children:"HTML\uacfc CSS \uadf8\ub9ac\uace0 Javascript\ub97c \uc774\uc6a9\ud55c \ud37c\ube14\ub9ac\uc2f1\uc744 \ub2e4\uc218 \uc9c4\ud589\ud55c \uacbd\ud5d8\uc774 \uc788\uc73c\uba70, \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801 UX/UI \uac1c\ubc1c\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4."})]})]})})})}),z=(t(97),function(){return Object(y.jsx)("div",{className:"skill back_end",children:Object(y.jsx)("div",{className:"wrap",children:Object(y.jsxs)("div",{className:"text",children:[Object(y.jsx)("p",{className:"title",children:"BACK-END"}),Object(y.jsxs)("div",{className:"icon",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/python.png",alt:"python"})}),Object(y.jsx)("p",{children:"PYTHON"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/mysql.png",alt:"mysql"})}),Object(y.jsx)("p",{children:"MYSQL"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"img",children:Object(y.jsx)("img",{src:"img/aws.png",alt:"aws"})}),Object(y.jsx)("p",{children:"AWS"})]})]}),Object(y.jsxs)("div",{className:"desc",children:[Object(y.jsx)("p",{children:"\ud68c\uc6d0 \uac00\uc785, \ub85c\uadf8\uc778, \uc0ac\uc6a9\uc790 \uad00\ub9ac, \uc2e4\uc2dc\uac04 \ucc44\ud305 \ubc0f \uba54\uc138\uc9c0 \ubcf4\ub0b4\uae30 \ub4f1 \uac04\ub2e8\ud55c \uc6f9 \uac1c\ubc1c\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(y.jsx)("p",{children:"Python\uc73c\ub85c Web Crawler\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, Uiautomation\uc744 \uae30\ubc18\uc73c\ub85c \uc6f9 \ub9e4\ud06c\ub85c \uc81c\uc791\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),Object(y.jsx)("p",{children:"AWS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \uc791\uc5c5 \uc911\uc778 \uc6f9\uc744 \ubc30\ud3ec\ud560 \uc218 \uc788\uc73c\uba70, AWS\ub85c DB \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})})})}),L=(t(98),function(n){var e=n.boardWidth,t=Object(a.c)((function(n){return n.AboutMenuClick}));return Object(y.jsxs)("div",{className:"section",id:"about","data-anchor":"about_page",children:[Object(y.jsx)("div",{className:"background"}),Object(y.jsxs)("div",{className:"result_board",style:{width:e},children:["profile"===t.select&&Object(y.jsx)(M,{}),"design"===t.select&&Object(y.jsx)(B,{}),"front_end"===t.select&&Object(y.jsx)(D,{}),"back_end"===t.select&&Object(y.jsx)(z,{})]})]})}),V=t(107),H=(t(99),function(n){var e=n.boardWidth,t=Object(x.useRef)(null),s=Object(a.c)((function(n){return n.SetSlideNumber})),i=Object(a.c)((function(n){return n.SetSlideCheck}));return Object(x.useEffect)((function(){var n;null===(n=t.current)||void 0===n||n.scrollTo({top:0,behavior:"smooth"})}),[s.number]),Object(y.jsxs)("div",{className:"section",id:"project","data-anchor":"project_page",children:[Object(y.jsx)("div",{className:"background"}),Object(y.jsx)("div",{className:"result_board",style:{width:e},children:Object(y.jsx)("div",{className:"content",children:i.check?Object(y.jsx)("div",{className:"loadingWrap",children:Object(y.jsx)(V.a,{spinning:!0,size:"large",tip:"\uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4"})}):Object(y.jsxs)(x.Fragment,{children:[Object(y.jsx)("p",{children:"PREVIEW"}),Object(y.jsxs)("div",{className:"img_"+s.number+" scroll-active scrollbar_custom",ref:t,children:[Object(y.jsx)("span",{children:"\uc2a4\ud06c\ub864\uc744 \ub0b4\ub824\uc11c PREVIEW\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"}),Object(y.jsx)("img",{src:"img/slide_"+s.number+".jpg",alt:"slide"})]})]})})})]})}),J=(t(100),function(n){var e=n.BoardRef,t=n.setPagingTopPosition,s=n.elementsInBoard,i=n.setActiveMenu,c=Object(x.useState)(),a=Object(f.a)(c,2),r=a[0],o=a[1],l=function(){o(window.innerWidth-e.current.offsetWidth-230)},d=function(n,e,i,c,a){t(n),s[e].current.childNodes[1].style.animationDelay="0s",s[e].current.className="fixed-box "+i,s[e].current.childNodes[0].style.display="none",s[c].current.className="fixed-box "+a,s[c].current.childNodes[0].style.display="block",s[c].current.childNodes[1].style.animationDelay=".5s"};return Object(x.useEffect)((function(){l(),window.addEventListener("resize",l)}),[]),Object(y.jsx)(W.a,{menu:"#gnb",lockAnchors:!0,anchors:["home_page","about_page","project_page"],navigation:!0,navigationPosition:"right",scrollingSpeed:800,navigationTooltips:["Home","About","Project"],showActiveTooltip:!0,keyboardScrolling:!0,normalScrollElements:".scroll-active",onLeave:function(n,e,t){0===e.index&&"up"===t?(d("31.5%",n.index,"moreDown",e.index,"home_down"),i("home")):1===e.index&&"up"===t?(d("49%",n.index,"moreDown",e.index,"down"),i("about")):1===e.index&&"down"===t?(d("49%",n.index,"moreUp",e.index,"up"),i("about")):2===e.index&&"up"===t?(d("67%",n.index,"moreDown",e.index,"down"),i("project")):2===e.index&&"down"===t&&(d("67%",n.index,"moreUp",e.index,"up"),i("project"))},render:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(Y,{boardWidth:r}),Object(y.jsx)(L,{boardWidth:r}),Object(y.jsx)(H,{boardWidth:r})]})}})}),U=function(n){var e=n.setActiveMenu,t=Object(x.useRef)(null),s=[Object(x.useRef)(null),Object(x.useRef)(null),Object(x.useRef)(null)],i=Object(x.useState)("31.5%"),c=Object(f.a)(i,2),a=c[0],r=c[1];return Object(y.jsx)("div",{className:"main",children:Object(y.jsxs)("main",{children:[Object(y.jsx)(_,{BoardRef:t,pagingTopPosition:a,elementsInBoard:s}),Object(y.jsx)(J,{BoardRef:t,setPagingTopPosition:r,elementsInBoard:s,setActiveMenu:e})]})})},G=function(){var n=Object(x.useState)("home"),e=Object(f.a)(n,2),t=e[0],s=e[1];return Object(y.jsxs)("div",{className:"home",children:[Object(y.jsx)(k,{activeMenu:t,setActiveMenu:s}),Object(y.jsx)(U,{setActiveMenu:s})]})},F=t(41),K=function(){return Object(x.useEffect)((function(){for(var n=0;n<F.length;n++){(new Image).src=F[n].name}}),[]),Object(y.jsx)(O.a,{basename:"/portfolio",children:Object(y.jsx)(g.c,{children:Object(y.jsx)(g.a,{path:"/",exact:!0,render:function(){return Object(y.jsx)(G,{})}})})})},q=(t(102),Object(c.b)(u));i.a.render(Object(y.jsx)(x.StrictMode,{children:Object(y.jsx)(a.a,{store:q,children:Object(y.jsx)(K,{})})}),document.getElementById("root"))},39:function(n){n.exports=JSON.parse('[{"id":0,"company":"(\uc8fc)\ube45\ucf00\uc5b4","name":"\uc870\uc120\uc77c\ubcf4 \uac74\uac15\ucc4c\ub9b0\uc9c0","skill":"REACT / TYPESCRIPT","desc":["\uc870\uc120\uc77c\ubcf4\uc5d0 \ud3ec\ud568\ub41c, \uac74\uac15\uc5d0 \uad00\ub828\ub41c \uc5ec\ub7ec\uac00\uc9c0 \ucc4c\ub9b0\uc9c0\uc5d0 \ub3c4\uc804\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \ucc4c\ub9b0\uc9c0 \uc778\uc99d \uc0ac\uc9c4\uc744 \ucc0d\uc5b4 \uc720\uc800\ub4e4\uacfc \uacf5\uc720\ud560 \uc218 \uc788\uc73c\uba70, \ucc4c\ub9b0\uc9c0\ub97c \uc644\ub8cc\ud558\uba74 \ub2e4\uc591\ud55c \uacbd\ud488\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ud2b8\ub85c\ud2b8 \uac00\uc218 \uae40\ub3d9\ud604, \uc774\uc194\ub85c\ubaac\uc744 \ube44\ub86f\ud574, \uc57c\ud54f, \ubc14\ub514\ud504\ub80c\ub4dc, \uc6c5\uc9c4, \uc544\uc2dc\uc544\ud504 \ub4f1 \ub2e4\uc591\ud55c \uc0d0\ub7fd\uacfc \uae30\uc5c5\uc774 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.","\uc6f9\ubdf0\ub97c \uc774\uc6a9\ud574\uc11c \uc81c\uc791\ud55c \ud558\uc774\ube0c\ub9ac\ub4dc \uc571\uc774\uba70, \uc870\uc120\uc77c\ubcf4\uc758 \uc571 \uac1c\ubc1c\uc790\ub4e4\uacfc \ub370\uc774\ud130\ub97c \uc8fc\uace0 \ubc1b\uac70\ub098 \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574 WebBridge\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4.","\uc870\uc120\uc77c\ubcf4 \uc571 \uc124\uce58 \ud6c4, \ud558\ub2e8 \uba54\ub274\uc5d0 \uac74\uac15\ucc4c\ub9b0\uc9c0 \ud074\ub9ad \ud6c4 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],"link":[]},{"id":1,"company":"(\uc8fc)\ube45\ucf00\uc5b4","name":"\ube45\ucf00\uc5b4 \uae30\uc5c5\uac80\uc9c4 \uad00\ub9ac\uc790","skill":"REACT / TYPESCRIPT / ANT DESIGN","desc":["10\uac1c \uadf8\ub8f9\uc0ac 52\uac1c\uc758 \uae30\uc5c5\uacfc \uc804\uad6d 122\uac1c\uc758 \ubcd1\uc6d0\uc744 \uc5f0\uacb0\ud574, \uae30\uc5c5\uc9c1\uc6d0\ub4e4\uc758 \uac74\uac15\uac80\uc9c4 \uc608\uc57d\uc744 \ub3c4\uc640\uc8fc\ub294 \ube45\ucf00\uc5b4 \uae30\uc5c5\uac80\uc9c4\uc758 \uad00\ub9ac\uc790 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.","\ubcc4\uac1c\uc758 \ub514\uc790\uc778 \uc5c6\uc774 Ant Design\uc73c\ub85c \uc81c\uc791\ub410\uc73c\uba70 DatePicker, Graph, Table, Description\uc744 \ud3ec\ud568\ud55c \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.","\uc804\uccb4 \uc11c\ube44\uc2a4\uc758 \uc57d 70%\uc5d0 \ud574\ub2f9\ud558\ub294 \uac80\uc9c4 \uc608\uc57d, \uac80\uc9c4 \ub300\uc0c1\uc790, \uac80\uc9c4 \uc77c\uc815, \ud1b5\uacc4 \ubd80\ubd84\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4.","\ub370\uc774\ud130 \uc591\uc774 \ub9ce\uc544 \uc11c\ube44\uc2a4 \uc18d\ub3c4\uac00 \ub290\ub9b0 \uad00\ub9ac\uc790 \uc6f9\uc758 \ubd88\ud3b8\ud568\uc744 \uc904\uc774\uae30 \uc704\ud574 Caching\uc744 \uc774\uc6a9\ud588\uc73c\uba70 Paging\uacfc Filtering\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc5d0\uac8c \uc694\uccad\ud574 \uc11c\ube44\uc2a4 \uc18d\ub3c4\ub97c \uac1c\uc120\ud588\uc2b5\ub2c8\ub2e4."],"link":[]},{"id":2,"company":"\uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624","name":"REPOSITORY\ub97c \uac80\uc0c9\ud574\ubcf4\uc790!","skill":"REACT / TYPESCRIPT / AWS","desc":["\ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \uac80\uc0c9\ud558\uc5ec \ud574\ub2f9 Github\ub85c \uc774\ub3d9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.","\uad00\uc2ec \ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \uc800\uc7a5\ud560 \uc218 \uc788\uc73c\uba70, \ud574\ub2f9 \uad00\uc2ec \ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub4e4\uc758 \ucd5c\uc2e0 \uc774\uc288\ub97c \ud55c \ub208\uc5d0 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\uc77c\ubc18\uc801\uc778 Paging \ubc29\uc2dd\uc774 \ud574\ub2f9 \uc6f9\uc5d0 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\ub294\ub2e4\uace0 \uc0dd\uac01\ud588\uae30\uc5d0, IntersectionObserver\ub97c \uc774\uc6a9\ud574 Infinity Scroll\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."],"link":[{"url":"https://master.d3dqp3b0p2a5nv.amplifyapp.com/","button":"VIEW"},{"url":"https://github.com/rhesus2017/search_github","button":"GITHUB"}]},{"id":3,"company":"\uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624","name":"\uc6b0\ub9ac\ub4e4\uc758 \uc791\uc740 \uba54\uc2e0\uc800","skill":"REACT / JAVASCRIPT / PYTHON / AWS","desc":["\ud68c\uc6d0\uac00\uc785, \ub85c\uadf8\uc778, \uac1c\uc778\uc815\ubcf4\uc218\uc815, \ud68c\uc6d0\uc815\ubcf4\uc218\uc815 \ub4f1\uc774 \ud3ec\ud568\ub41c \ud68c\uc6d0\uad00\ub9ac \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. README.md\uc5d0 \uae30\uc785\ub41c \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc73c\uba70, \uacc4\uc815\uc758 \uad8c\ud55c\uc5d0 \ub530\ub77c \uae30\ub2a5\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4.","SOCKET\uc744 \uc774\uc6a9\ud558\uc5ec \ud68c\uc6d0\uac04\uc5d0 \uc2e4\uc2dc\uac04 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc788\uc73c\uba70, \ud574\ub2f9 \ud68c\uc6d0\uc774 \ubbf8\uc811\uc18d\uc77c \uacbd\uc6b0 \uc218\uc2e0 \uba54\uc138\uc9c0\ub294 \ubcf4\uad00\ud568\uc5d0 \ubcf4\uad00\ub429\ub2c8\ub2e4.","AWS RDS\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0dd\uc131\ud558\uace0 AWS EC2\ub85c \ubc30\ud3ec\ud588\uc2b5\ub2c8\ub2e4."],"link":[{"url":"http://3.144.85.216:5000/","button":"VIEW"},{"url":"https://github.com/rhesus2017/member_management","button":"GITHUB"}]},{"id":4,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"\ud53c\ud50c\uc544\uc774 \ub85c\ub610 \uad00\ub9ac\uc790","skill":"REACT / JAVASCRIPT","desc":["\ud53c\ud50c\uc544\uc774 \ub85c\ub610 \uc11c\ube44\uc2a4\uc758 \uc608\uc57d\uacfc \uacb0\uc81c, \uadf8\ub9ac\uace0 \ud68c\uc6d0 \uad00\ub9ac\ub97c \uc9c0\uc6d0\ud558\ub294 \ub85c\ub610 \uad00\ub9ac\uc790 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.","SOCKET\uc744 \uc774\uc6a9\ud558\uc5ec \ud68c\uc6d0\uac04\uc5d0 \uc2e4\uc2dc\uac04 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc788\uc73c\uba70, \ud574\ub2f9 \ud68c\uc6d0\uc774 \ubbf8\uc811\uc18d\uc77c \uacbd\uc6b0 \uc218\uc2e0 \uba54\uc138\uc9c0\ub294 \ubcf4\uad00\ud568\uc5d0 \ubcf4\uad00\ub429\ub2c8\ub2e4.","\ubcc4\uac1c\uc758 \ub514\uc790\uc778 \uc5c6\uc774 Bootstrap\uc73c\ub85c \uc81c\uc791\ub410\uace0, \uc804\uccb4 \uc11c\ube44\uc2a4\uc758 \uc57d 30%\uc5d0 \ud574\ub2f9\ud558\ub294 \uc2e4\uc2dc\uac04 \uba54\uc138\uc9c0 \uc1a1\uc218\uc2e0, \ud68c\uc6d0 \uad00\ub9ac, \uc218\uc2e0\uc870\ud569\ub0b4\uc5ed \ubd80\ubd84\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4."],"link":[]},{"id":5,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"CATCH ON AI","skill":"REACT / JAVASCRIPT / PYTHON / MYSQL","desc":["\uc870\ud68c\ud55c \uc8fc\uc2dd \uc885\ubaa9\uc758 \ub370\uc774\ud130\ub97c \uc218\uc9d1 \ubc0f \ubd84\uc11d\ud558\uc5ec \uc5f0\uad00 \uc774\uc288 \ubc0f \uad00\ub828 \ub274\uc2a4\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \ube60\ub974\uac8c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.","\uc720\ub8cc \uc11c\ube44\uc2a4\ub97c \uc2e0\uccad\ud558\uba74 \ubd84\uc11d\ub41c \ub370\uc774\ud130\ub97c \ud154\ub808\uadf8\ub7a8\uc744 \ud1b5\ud574 \ubc1b\uc544\ubcfc \uc218 \uc788\uc73c\uba70, \uac01\uc885 \ud3ec\ud138\uc5d0\uc11c \uac00\uc7a5 \ub9ce\uc774 \uc5b8\uae09\ub418\ub294 \uae30\uc5c5\uc758 \ub7ad\ud0b9\ub3c4 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.","python telegram bot\uc744 \uc0ac\uc6a9\ud574 \ud154\ub808\uadf8\ub7a8 \uae30\ub2a5\uc744 \uad6c\ud604\ud588\uace0, Word Cloud\uc640 Graph\ub85c \uc815\ubcf4\ub97c \uc2dc\uac01\ud654\ud588\uc2b5\ub2c8\ub2e4."],"link":[]},{"id":6,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"\uc54c\ub9bc\ubaac","skill":"JAVASCRIPT / PYTHON / MYSQL","desc":["\uc815\ubcf4\uc131 \ubb38\uc790\ub97c SHORT URL\uc744 \ud1b5\ud574 \uc800\ub834\ud558\uac8c \ub300\ub7c9 \ubc1c\uc1a1\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ud6c4 \uc218\uc2e0\uc790\uc758 \ubc18\uc751 \uacb0\uacfc\ub3c4 \ud655\uc778 \uac00\ub2a5\ud55c \uadf8\ub8f9 \uba54\uc138\uc9d5 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.","\uc804\uccb4\uc801\uc778 \ud37c\ube14\ub9ac\uc2f1\uc744 \ub2f4\ub2f9\ud588\uace0 Python\uc744 \uc774\uc6a9\ud574 \ud68c\uc6d0\uac00\uc785, \ub85c\uadf8\uc778, \ud68c\uc6d0\uc815\ubcf4\uc218\uc815 \ub4f1 \ubc31\uc5d4\ub4dc \ud30c\ud2b8\ub97c \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4."],"link":[{"url":"http://allimmon.com/","button":"VIEW"}]},{"id":7,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"\ub85c\ub610\ube14\ub8e8","skill":"JAVASCRIPT","desc":["\ud68c\uc6d0\ub4e4\uc5d0\uac8c \ud604\uc7ac\uae4c\uc9c0 \ub204\uc801\ub41c \ub85c\ub610 \ucd94\ucca8 \uacb0\uacfc\ub97c \uc218\uc9d1 \ubc0f \ubd84\uc11d\ud558\uc5ec \ub85c\ub610 \ubc88\ud638\ub97c \ucd94\ucc9c\ud574\uc8fc\ub294 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."],"link":[{"url":"https://lottoblue.co.kr/","button":"PC VIEW"},{"url":"https://m.lottoblue.co.kr/","button":"MOBILE VIEW"}]},{"id":8,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"\ud0a4\uc6c0\ub85c\ub610","skill":"JAVASCRIPT","desc":["\ud68c\uc6d0\ub4e4\uc5d0\uac8c \ud604\uc7ac\uae4c\uc9c0 \ub204\uc801\ub41c \ub85c\ub610 \ucd94\ucca8 \uacb0\uacfc\ub97c \uc218\uc9d1 \ubc0f \ubd84\uc11d\ud558\uc5ec \ub85c\ub610 \ubc88\ud638\ub97c \ucd94\ucc9c\ud574\uc8fc\ub294 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."],"link":[{"url":"https://kiumlotto.com/","button":"PC VIEW"},{"url":"https://m.kiumlotto.com/","button":"MOBILE VIEW"}]},{"id":9,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"\uc9c0\ub2c8\ub85c\ub610","skill":"JAVASCRIPT","desc":["\ud68c\uc6d0\ub4e4\uc5d0\uac8c \ud604\uc7ac\uae4c\uc9c0 \ub204\uc801\ub41c \ub85c\ub610 \ucd94\ucca8 \uacb0\uacfc\ub97c \uc218\uc9d1 \ubc0f \ubd84\uc11d\ud558\uc5ec \ub85c\ub610 \ubc88\ud638\ub97c \ucd94\ucc9c\ud574\uc8fc\ub294 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."],"link":[{"url":"https://genielotto.co.kr/","button":"VIEW"}]},{"id":10,"company":"(\uc8fc)\ud53c\ud50c\uc544\uc774","name":"\uc6f0\ucef4\ub85c\ub610","skill":"JAVASCRIPT","desc":["\ud68c\uc6d0\ub4e4\uc5d0\uac8c \ud604\uc7ac\uae4c\uc9c0 \ub204\uc801\ub41c \ub85c\ub610 \ucd94\ucca8 \uacb0\uacfc\ub97c \uc218\uc9d1 \ubc0f \ubd84\uc11d\ud558\uc5ec \ub85c\ub610 \ubc88\ud638\ub97c \ucd94\ucc9c\ud574\uc8fc\ub294 \uc6f9 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."],"link":[{"url":"https://welcomelotto.co.kr/","button":"VIEW"}]}]')},41:function(n){n.exports=JSON.parse('[{"name":"img/slide_0.jpg"},{"name":"img/slide_1.jpg"},{"name":"img/slide_2.jpg"},{"name":"img/slide_3.jpg"},{"name":"img/slide_4.jpg"},{"name":"img/slide_5.jpg"},{"name":"img/slide_6.jpg"},{"name":"img/slide_7.jpg"},{"name":"img/slide_8.jpg"},{"name":"img/slide_9.jpg"},{"name":"img/slide_10.jpg"},{"name":"img/ai.png"},{"name":"img/figma.png"},{"name":"img/ts.png"},{"name":"img/css.png"},{"name":"img/html.png"},{"name":"img/js.png"},{"name":"img/mysql.png"},{"name":"img/ps.png"},{"name":"img/python.png"},{"name":"img/react.png"},{"name":"img/sass.png"},{"name":"img/aws.png"},{"name":"img/antd.png"},{"name":"img/background_about.jpeg"},{"name":"img/background_home.jpeg"},{"name":"img/background_project.jpeg"}]')},75:function(n,e,t){},76:function(n,e,t){},92:function(n,e,t){},93:function(n,e,t){},94:function(n,e,t){},95:function(n,e,t){},96:function(n,e,t){},97:function(n,e,t){},98:function(n,e,t){},99:function(n,e,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.0379e99b.chunk.js.map