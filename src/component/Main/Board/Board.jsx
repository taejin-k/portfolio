// component
import Home from './Home/Home';
import About from './About/About';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';


// css
import './Board.css';

const Board = ({ BoardRef, PagingTop, fixedBoxRefArray }) => {
    
    return(
        <div id="board" ref={BoardRef}>
            <div id='fp-nav-duplication'><i style={{ top: PagingTop }}></i></div>
            <Home HomeFixedBoxRef={fixedBoxRefArray[0]} />
            <About AboutFixedBoxRef={fixedBoxRefArray[1]} />
            <Second SecondFixedBoxRef={fixedBoxRefArray[2]} />
            <Third ThirdFixedBoxRef={fixedBoxRefArray[3]} />
            <Fourth FourthFixedBoxRef={fixedBoxRefArray[4]} />
        </div>       
    )
}

export default Board;