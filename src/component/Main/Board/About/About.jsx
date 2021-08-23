// css
import './About.css';

const About = () => {

    return(
        <div id='about' className="fixed-box">
            <h2>About</h2>
            <div className="detail">
                <span className="num-now"># 01</span>
                <h3>ABOUT</h3>
                <span className="type">MY PROFILE AND SKILLS</span>
                <div className="board_menu">
                    <div className="one">
                        <div data-name="profile" className="on">Profile</div>
                    </div>
                    <div className="two">
                        <div data-name="design">Design</div>
                        <div data-name="front_end">Front-end</div>
                    </div>
                    <div className="two">
                        <div data-name="back_end">Back-end</div>
                        <div data-name="crawling">Crawling</div>
                    </div>
                    <div className="one">
                        <div data-name="etc">Etc</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;