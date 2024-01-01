import { useState } from "react";

import "./SocialMediaIcon.scss";

function SocialMediaIcon({icon, alt, clipboard_message}){
    const [iconClassName, setIconClassName] = useState("icon__normal");
    const [copyClassName, setCopyClassName] = useState("clipboard-wrapper clipboard__invisible");
    const [copyMessage, setCopyMessage] = useState("Copy");

    const handleMouseEnter = () => {
        setCopyClassName("clipboard-wrapper clipboard__visible");
        setIconClassName("icon__small");
        setCopyMessage("Copy");
    }

    const handleMouseLeave = () => {
        setCopyClassName("clipboard-wrapper clipboard__invisible");
        setIconClassName("icon__normal");
        setCopyMessage("Copy");
    }

    const handleMouseClick = () => {
        navigator.clipboard.writeText(clipboard_message);
        setCopyMessage("Copied!");
    }

    return(
        <div className="social-media-icon__wrapper">
            <div className={copyClassName}>{copyMessage}</div>   
            <img 
                src={icon} 
                alt={alt}
                className={iconClassName}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseClick}
            />
        </div>
    )
}

export default SocialMediaIcon;