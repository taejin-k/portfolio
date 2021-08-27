// css
import './Second.css';

const Second = ({ ResultBoardWidth }) => {

    return(
        <div className="section" id="second" data-anchor="second_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}></div>
        </div>
    )
}

export default Second;