// css
import './Project.css';

const Project = ({ ResultBoardWidth }) => {

    return(
        <div className="section" id="project" data-anchor="project_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}></div>
        </div>
    )
}

export default Project;