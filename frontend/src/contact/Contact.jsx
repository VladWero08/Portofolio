import "./Contact.scss";

import circles from "../assets/images/circles.png"
import circles_reversed from "../assets/images/circles-reversed.png"

import SocialMediaIcon from "./SocialMediaIcon";
// icons for social media
import email_icon from "../assets/images/email.png"
import github_icon from "../assets/images/github.png"
import linked_in_icon from "../assets/images/linked-in.png"

function Contact(){
    const socialMediaIcons = [
        <SocialMediaIcon 
            icon={email_icon} 
            alt="email-icon"
            clipboard_message="vladolaeriu@gmail.com"   
        />,
        <SocialMediaIcon 
            icon={linked_in_icon} 
            alt="linked-in-icon"
            clipboard_message="https://linkedin.com/in/vlad-mihai-olaeriu"
        />,
        <SocialMediaIcon 
            icon={github_icon} 
            alt="github-icon"
            clipboard_message="https://github.com/VladWero08"
        />
    ]

    return(
        <div className="contact-wrapper">
            <div className="contact-inner-wrapper">
                <p className="big-special-title">GET IN TOUCH<br></br>WITH ME</p>
                
                <div className="circles-reversed">
                    <img src={circles_reversed} alt="circles_reversed"/>
                </div> 

                <div className="contact-icons">
                    {socialMediaIcons}
                </div>

                <div className="contact-titles">
                    <h2 className="contact-title">
                    🚀 Open to exciting project ideas! Passionate about 
                    Machine Learning and eager to strengthen my knowledge. <br></br> <br></br>
                    💡 Let's turn visions into reality!
                    </h2>
                </div>

                <div className="circles">
                    <img src={circles} alt="circles"/>
                </div>               
            </div>
        </div>
    )
}

export default Contact;