// css
import './Third.css';

const Third = ({ ResultBoardWidth }) => {

    return(
        <div className="section" id="third" data-anchor="third_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}></div>
        </div>
    )
}

export default Third;