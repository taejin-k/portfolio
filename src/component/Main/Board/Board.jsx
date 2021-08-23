// component
import Home from './Home/Home';
import About from './About/About';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';


// css
import './Board.css';

const Board = () => {

    return(
        <div id="board">
            <Home />
            <About />
            <Second />
            <Third />
            <Fourth />
        </div>       
    )
}

export default Board;