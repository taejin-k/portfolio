// css
import './End.css';

const End = ({ EndFixedBoxRef }) => {

    return(
        <div id='end' className="fixed-box" ref={EndFixedBoxRef}>
            <h2>End</h2>
            <div className="detail">
                <span className="num-now"># 03</span>
                <h3>END</h3>
                <span className="type">THANK YOU FOR YOUR VISIT</span>
            </div>
        </div>
    )
}

export default End;