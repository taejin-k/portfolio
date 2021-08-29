// redux
import { useSelector } from 'react-redux';

// component
import Profile from './Profile/Profile';
import Design from './Design/Design';
import FrontEnd from './FrontEnd/FrontEnd';
import BackEnd from './BackEnd/BackEnd';
import Etc from './Etc/Etc';

// css
import './About.css';

const About = ({ ResultBoardWidth }) => {

    const selectMenu = useSelector(state => state.AboutMenuClick)

    return(
        <div className="section" id="about" data-anchor="about_page">
            <div className="background"></div>
            <div className="result_board" style={{ width: ResultBoardWidth }}>
                {selectMenu.select === 'profile' && <Profile />}
                {selectMenu.select === 'design' && <Design />}
                {selectMenu.select === 'front_end' && <FrontEnd />}
                {selectMenu.select === 'back_end' && <BackEnd />}
                {selectMenu.select === 'etc' && <Etc />}
            </div>
            </div>
    )
}

export default About;