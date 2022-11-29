import { useState } from 'react';
import './Enter.css';
import Home from './Home';

function Enter() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            {!clicked && 
                <div className="main-div">
                    <div className='clickable' onClick={() => {setClicked(true)}}>
                        <img className="file" src="https://www.svgrepo.com/show/226153/html.svg" alt="html file icon"/>
                        <p className='file-name'>rumessa_inamullah.html</p>
                    </div>
                </div>
            }
            {clicked && <Home /> }
        </>
        
        
        
    );
}
export default Enter;