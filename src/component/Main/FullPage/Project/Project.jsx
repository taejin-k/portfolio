// redux
import { useSelector } from 'react-redux';

// css
import './Project.css';

const Project = ({ ResultBoardWidth }) => {

    const Count = useSelector(state => state.SetSlideNumber)

    return(
        <div className="section" id="project" data-anchor="project_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}>
                <div className='content'>
                    <p>PREVEIW</p>
                    <div className={"img_" + Count.number + " scroll-active scrollbar_custom"}>
                        <img src={'/img/slide_' + Count.number + '.jpg'} alt='slide'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;