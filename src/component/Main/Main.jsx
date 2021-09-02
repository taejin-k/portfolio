// react
import { useRef, useState } from 'react';

// component
import Board from './Board/Board';
import FullPage from './FullPage/FullPage';

const Main = ({ setActiveName }) => {

    const BoardRef = useRef(null);
    const HomeFixedBoxRef = useRef(null);
    const AboutFixedBoxRef = useRef(null);
    const ProjectFixedBoxRef = useRef(null);
    const fixedBoxRefArray = [HomeFixedBoxRef, AboutFixedBoxRef, ProjectFixedBoxRef]
    const [ PagingTop, setPagingTop ] = useState('31.5%');

    return(
        <div className='main'>
            <main>
                <h1 className="blind">포트폴리오 본문</h1>
                <Board BoardRef={BoardRef} PagingTop={PagingTop} fixedBoxRefArray={fixedBoxRefArray} />
                <FullPage BoardRef={BoardRef} setPagingTop={setPagingTop} fixedBoxRefArray={fixedBoxRefArray} setActiveName={setActiveName} />
            </main>
        </div>              
    )
}

export default Main;