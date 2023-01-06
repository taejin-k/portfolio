import { useState } from "react";
import styled from "styled-components";

const Header = ({ activeMenu, setActiveMenu }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuList = ["home", "about", "project"];

  const handleMenuClick = () => setMenuVisible((state) => !state);

  const handleMenuSelect = (menu) => {
    setActiveMenu(menu);
    setMenuVisible(false);
  };

  return (
    <HeaderStyled>
      <h1 className="name">
        <em>KIM</em>TAEJIN
      </h1>

      <div
        className={menuVisible ? "menu open" : "menu"}
        onClick={handleMenuClick}
      >
        <button type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav id="gnb" className="nav">
        <ul>
          {menuList.map((menu) => {
            return (
              <li key={menu} className={activeMenu === menu ? "on" : ""}>
                <span
                  data-menuanchor={`${menu}_page`}
                  onClick={() => handleMenuSelect(menu)}
                >
                  {menu.toUpperCase()}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  .name {
    position: absolute;
    top: 56px;
    left: 110px;
    font-size: 2.5rem;
    font-weight: lighter;
    z-index: 4;

    em {
      font-weight: bold;
      font-style: normal;
    }
  }

  .menu {
    position: absolute;
    top: 58px;
    left: 60px;
    width: 30px;
    height: 25px;
    z-index: 4;

    button {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      background: none;
      box-shadow: none;
      cursor: pointer;

      span {
        display: block;
        width: 100%;
        height: 5px;
        background: #222;
        transition: 0.3s;

        &:nth-of-type(2) {
          margin: 5px 0;
        }
      }
    }

    &.open {
      + .nav {
        left: 30px;
        opacity: 1;
      }

      button {
        span {
          &:nth-of-type(1) {
            position: absolute;
            top: 10px;
            left: 0;
            transform: rotate(45deg);
          }

          &:nth-of-type(2) {
            display: none;
          }

          &:nth-of-type(3) {
            position: absolute;
            top: 10px;
            left: 0;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

  .nav {
    position: absolute;
    top: 30px;
    left: -760px;
    max-width: 760px;
    width: 40%;
    height: calc(100vh - 60px);
    z-index: 3;
    transition: 0.8s ease;
    opacity: 0;

    ul {
      width: 100%;
      height: 100%;
      padding: 145px 21%;
      background: #e0e0e0;

      li {
        line-height: 70px;
        width: 100%;

        span {
          display: inline-block;
          font-size: 40px;
          color: #9b9b9b;
          font-weight: bold;
          cursor: pointer;

          &:hover {
            color: #222;
          }
        }

        &.on {
          span {
            color: #222;
          }
        }
      }
    }
  }
`;
