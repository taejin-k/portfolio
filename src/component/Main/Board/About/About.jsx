// redux
import { useSelector, useDispatch } from 'react-redux';
import { AboutMenuClick } from '../../../../action';

// css
import './About.css';

const About = ({ AboutFixedBoxRef }) => {

    const dispatch = useDispatch();
    const aboutMenuClick = (select) => { dispatch(AboutMenuClick(select)); }
    const selectMenu = useSelector(state => state.AboutMenuClick)

    return(
        <div id='about' className="fixed-box" ref={AboutFixedBoxRef}>
            <h2>About</h2>
            <div className="detail">
                <span className="num-now"># 01</span>
                <h3>ABOUT</h3>
                <span className="type">MY PROFILE AND SKILLS</span>
                <div className="board_menu">
                    <div className="one">
                        <div data-name="profile" className={selectMenu.select === 'profile' ? 'on' : ''} onClick={() => aboutMenuClick('profile')}>Profile</div>
                    </div>
                    <div className="one">
                        <div data-name="design" className={selectMenu.select === 'design' ? 'on' : ''} onClick={() => aboutMenuClick('design')}>Design</div>
                    </div>
                    <div className="two">
                        <div data-name="front_end" className={selectMenu.select === 'front_end' ? 'on' : ''} onClick={() => aboutMenuClick('front_end')}>Front-end</div>
                        <div data-name="back_end" className={selectMenu.select === 'back_end' ? 'on' : ''} onClick={() => aboutMenuClick('back_end')}>Back-end</div>
                    </div>
                    <div className="one">
                        <div data-name="etc" className={selectMenu.select === 'etc' ? 'on' : ''} onClick={() => aboutMenuClick('etc')}>Etc</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;