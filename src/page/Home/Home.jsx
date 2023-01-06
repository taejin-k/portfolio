import { useState } from "react";
import Header from "../../component/Header/Header";
import Main from "../../component/Main/Main";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="home">
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Main setActiveMenu={setActiveMenu} />
    </div>
  );
};

export default Home;
