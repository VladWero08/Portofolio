import TimelineAcademical from "./TimelineAcademical";
import TimelineProfessional from "./TimelineProfessional";
import Skills from "./Skills";
import Description from "./Description";

import wave from "../assets/images/wave.svg";

import "./About.scss";

function About() {
    return (
        <div>
            <Description/>
            <Skills/>
            <TimelineAcademical/>
            <div className="wave__wrapper">
                <img src={wave} alt="wave"/>
            </div>
            <TimelineProfessional/>
        </div>
    );
}

export default About;