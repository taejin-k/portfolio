// component
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';


// css
import './Board.css';

const Board = ({ BoardRef, PagingTop, fixedBoxRefArray }) => {
    
    return(
        <div id="board" ref={BoardRef}>
            <div id='fp-nav-duplication'><i style={{ top: PagingTop }}></i></div>
            <Home HomeFixedBoxRef={fixedBoxRefArray[0]} />
            <About AboutFixedBoxRef={fixedBoxRefArray[1]} />
            <Project ProjectFixedBoxRef={fixedBoxRefArray[2]} />
        </div>       
    )
}

export default Board;