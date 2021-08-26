// css
import './Second.css';

const Second = ({ SecondFixedBoxRef }) => {

    return(
        <div id='second' className="fixed-box" ref={SecondFixedBoxRef}>
            <h2>Second</h2>
            <div className="detail">
                <span className="num-now"># 02</span>
                <h3>SECOND</h3>
                <span className="type">RESPONSIVE WEBSITE</span>
            </div>
        </div>
    )
}

export default Second;