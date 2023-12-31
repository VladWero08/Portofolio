import "./Contact.scss";

import circles from "../assets/images/circles.png"
import circles_reversed from "../assets/images/circles-reversed.png"
import github_icon from "../assets/images/github.png"

function Contact(){
    return(
        <div className="contact-wrapper">
            <div className="contact-inner-wrapper">
                <p className="big-special-title">GET IN TOUCH<br></br>WITH ME</p>

                {/* <div className="circles">
                    <img src={circles} alt="circles"/>
                </div> */}
                
                <div className="contact-icons">
                    <img src={github_icon} alt="github-icon"/>
                    <img src={github_icon} alt="github-icon"/>
                    <img src={github_icon} alt="github-icon"/>
                </div>

                <div className="contact-titles">
                    <h2 className="contact-title">
                    🚀 Open to Exciting Projects! Passionate about 
                    Machine Learning and eager to collaborate on innovative ideas. <br></br> <br></br>
                    💡 Let's turn visions into reality!
                    </h2>
                </div>

                {/* <div className="circles-reversed">
                    <img src={circles_reversed} alt="circles_reversed"/>
                </div>                 */}
            </div>
        </div>
    )
}

export default Contact;