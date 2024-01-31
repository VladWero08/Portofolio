import CircularProgress from '@mui/joy/CircularProgress';

import "./Skills.scss";

import react from "../assets/images/react.png";
import cpp from "../assets/images/cpp.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
import arduino from "../assets/images/arduino.png";


function Skills() {
    const skills = [
        {
            language: cpp,
            percentage: 70,
        },
        {
            language: python,
            percentage: 85,
        },
        {
            language: java,
            percentage: 65,
        },
        {
            language: react,
            percentage: 50,
        },
        {
            language: arduino,
            percentage: 75,
        },
    ]

    const renderedSkills = skills.map(skill => 
            <div className="skill">
                <img src={skill.language} alt="programming_language" />
                <CircularProgress 
                    color="neutral" 
                    size="lg" 
                    determinate 
                    value={skill.percentage}
                    style={{color: "rgba(189, 196, 167, 1)"}}
                >
                    {skill.percentage}%
                </CircularProgress>
            </div>
        )

    return (
        <div className="skills__wrapper">
            <div className="skills__title">
                <h1>Developer Skills</h1>
                <div className="line"></div>
                <p>
                    Adept at crafting robust and scalable solutions, I bring a keen problem-solving mindset to every project. 
                    Driven by a passion for continuous learning and technology advancement.
                    <br />
                    <br />
                    Enthusiastically seeking to deepen my knowledge in <strong>mathematics for machine learning</strong>, 
                    delve into <strong>programming with Rust</strong>, and enhance my overall <strong>understanding of computers</strong>. 
                </p>
            </div>
            <div className="skills">
                {renderedSkills}
            </div>
        </div>
    )
}

export default Skills;