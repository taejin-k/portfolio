// css
import './Project.css';

const Project = ({ ProjectFixedBoxRef }) => {

    return(
        <div id='project' className="fixed-box" ref={ProjectFixedBoxRef}>
            <h2>Project</h2>
            <div className="detail">
                <span className="num-now"># 02</span>
                <h3>PROJECT</h3>
                <span className="type">INTRODUCING MY PROJECT</span>
            </div>
        </div>
    )
}

export default Project;