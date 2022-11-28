import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Enter.css';
import Home from './Home';

function Enter() {
    const [clicked, setClicked] = useState(false);
    const nodeRef = useRef(null);

    return (
        <>
            {!clicked && 
                <div className="main-div">
                    <div className='clickable' onClick={e => {setClicked(true)}}>
                        <img className="file" src="https://www.svgrepo.com/show/226153/html.svg" alt="html file icon"/>
                        <p className='file-name'>rumessa_inamullah.html</p>
                    </div>
                </div>
            }
            {clicked && 
                <CSSTransition nodeRef={nodeRef} in={clicked} timeout={20000} classNames="fade" mountOnEnter>
                    <Home />
                </CSSTransition>
            }
        </>
        
        
        
    );
}
export default Enter;