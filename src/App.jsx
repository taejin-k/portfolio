// react
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// page
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';

// json
import ImgArrays from '/json/ImgArray.json';

function App() {

  useEffect(() => {
    for (let i = 0; i < ImgArrays.length; i++) { 
      let img = new Image();
      img.src = ImgArrays[i].name; 
    } 
  }, []);

  return (
    <div className='react_app'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact={true} render={() => <Home />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
