// react
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// page
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';

function App() {

  return (
    <div className='react_app'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} render={() => <Home />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
