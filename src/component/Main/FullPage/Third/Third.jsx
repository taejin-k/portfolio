// css
import './Third.css';

const Third = ({ ThirdFixedBoxRef }) => {

    return(
        <div id='third' className="fixed-box" ref={ThirdFixedBoxRef}>
            <h2>Third</h2>
            <div className="detail">
                <span className="num-now"># 03</span>
                <h3>THIRD</h3>
                <span className="type">RESPONSIVE WEBSITE</span>
            </div>
        </div>
    )
}

export default Third;