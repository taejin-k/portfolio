// css
import './End.css';

const End = ({ ResultBoardWidth }) => {

    return(
        <div className="section" id="end" data-anchor="end_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}></div>
        </div>
    )
}

export default End;