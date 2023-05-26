import './PlayButton.css';
import { useState,useContext,memo } from 'react';
import ThemeContext from '../context/ThemeContext';

const PlayButton = memo(function PlayButton({ children, onPlay, onPause }) {

    const theme =useContext(ThemeContext);
    const [state,setState] = useState(false)
    // let state = false;
    function handleclick(e) {
        e.stopPropagation();
        if (state) {
            onPlay();
        }
        else {
            onPause();
        }
        setState(!state);


    }

    return (
        <button  className={theme} onClick={handleclick}>{children} : {state ? '⏯️' : '⏸️'}</button>

    )
})
export default PlayButton;