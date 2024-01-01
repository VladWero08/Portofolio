import CircularProgress from '@mui/joy/CircularProgress';

import "./Skills.scss";

function Skills() {
    const skills = [
        {
            language: "C/C++",
            percentage: 70,
        },
        {
            language: "Python",
            percentage: 85,
        },
        {
            language: "Java",
            percentage: 65,
        },
        {
            language: "React",
            percentage: 50,
        },
        {
            language: "Django",
            percentage: 75,
        },
        {
            language: "FastAPI",
            percentage: 85,
        },
    ]

    const renderedSkills = skills.map(skill => 
            <div className="skill">
                <h3>{skill.language}</h3>
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
                </p>
            </div>
            <div className="skills">
                {renderedSkills}
            </div>
        </div>
    )
}

export default Skills;