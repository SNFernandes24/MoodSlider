import React from 'react';
import './Sliders.css'
//handles each slider
const Sliders = ({leftText, rightText, sliderChange, keyval}) => {
    return (
        <div className="sliderContainer">
            <span className="sliderLabel">{leftText} </span>
            {/* range is from 0-2 to get each value, sliderChange is called onChange, keyval is added to avoid overlaps with other datalist */}
            <input type="range" min="0" max="2" defaultValue="1" className="slider" onChange={sliderChange} list={`datalist${keyval}`}></input>
            <datalist id={`datalist${keyval}`}>
                <option value={leftText} />
                <option value={rightText} />
            </datalist>
            <span className="sliderLabel"> {rightText}</span>
        </div>
    );
}

export default Sliders;