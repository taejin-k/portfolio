// css
import './Fourth.css';

const Fourth = ({ ResultBoardWidth }) => {

    return(
        <div className="section" id="fourth" data-anchor="fourth_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}></div>
        </div>
    )
}

export default Fourth;