import React from 'react';
import logo from './images/Sky-Logo.png';
import mobLogo from './images/favicon.ico';
import './Header.css'
//handles navbar
const Header = ({handleChange}) => {
    return (
        // logo with mobile alternative so it doesnt break site
        <div className="container">
            <a href="blank">
                <img className="logo" alt="SkyLogo" src={logo} />
                <img src={mobLogo} alt="mobile logo" className="imgMobile"/>
            </a>
            <span>
                <h1 className="tc">Sky Home</h1>
                <br />
                <h2>Moodslider | 
                    <span>
                        {/* uploading file handleChange is a function in app thats called onChange */}
                        <input type="file" className="inputFile" name="file" id="file" onChange={handleChange} />
                        <label htmlFor="file">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/OOjs_UI_icon_upload-ltr.svg" alt="upload content" />
                            Upload Content
                        </label>
                    </span>
                </h2>
            </span>
        </div>
    );
}

export default Header;