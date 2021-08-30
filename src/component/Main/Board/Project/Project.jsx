// react
import Slider from 'react-slick';

// css
import './Project.css';

const Project = ({ ProjectFixedBoxRef }) => {

    const setting = {
        speed: 500
    }
    return(
        <div id='project' className="fixed-box" ref={ProjectFixedBoxRef}>
            <h2>Project</h2>
            <div className="detail">
                <span className="num-now"># 02</span>
                <h3>PROJECT</h3>
                <span className="type">INTRODUCING MY PROJECT</span>
                <p className='number'># 01/14</p>
                <Slider {...setting}>
                    <div className='slide'>
                        <p className='name'>로또블루</p>
                        <p className='skill'>HTML / CSS / JAVASCRIPT(JQUERY)</p>
                        <p className='desc'>피플아이(주)에서 퍼블리싱을 담당한 로또 추천 페이지입니다.<br /> PC 페이지와 MOBILE 페이지가 따로 제작되었습니다.</p>
                        <div className='link'>
                            <a href='https://lottoblue.co.kr/'>PC VIEW</a>
                            <a href='https://m.lottoblue.co.kr/'>MOBILE VIEW</a>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Slider>
            </div>
        </div>
    )
}

export default Project;