import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./page/Home/Home";
import ImgArrays from "./json/ImgArray.json";

const App = () => {
  // useEffect(() => {
  //   for (let i = 0; i < ImgArrays.length; i++) {
  //     let img = new Image();
  //     img.src = ImgArrays[i].name;
  //   }
  // }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact={true} render={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
