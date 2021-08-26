// css
import './Fourth.css';

const Fourth = ({ FourthFixedBoxRef }) => {

    return(
        <div id='fourth' className="fixed-box" ref={FourthFixedBoxRef}>
            <h2>Fourth</h2>
            <div className="detail">
                <span className="num-now"># 04</span>
                <h3>FOURTH</h3>
                <span className="type">RESPONSIVE WEBSITE</span>
            </div>
        </div>
    )
}

export default Fourth;