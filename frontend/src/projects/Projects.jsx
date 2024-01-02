import "./Projects.scss";

import github_icon from "../assets/images/github.png";

function Projects(){
    const projects = [
        {
            name: "Sinister Escape",
            technologies: "Arduino",
            project_class: "project project__sinister-escape",
        },
        {
            name: "DisBotify",
            technologies: "Django, React, MySQL",
            project_class: "project project__small project__disbotify",
        },
        {
            name: "NetworKeen",
            technologies: "Python, Docker",
            project_class: "project project__networkeen",
        },
        {
            name: "Sparrow the Trip Planner",
            technologies: "Django, React, MySQL",
            project_class: "project project__sparrow",
        },
        {
            name: "Brain Anomaly Detection",
            technologies: "Python, Tensorflow",
            project_class: "project project__small project__brainanomaly",
        },
        {
            name: "ProcFS",
            technologies: "C, Libfusr",
            project_class: "project project__procfs",
        },
        {
            name: "Robotics",
            technologies: "Arduino",
            project_class: "project project__small project__robotics",
        },
    ];

    const renderProjects = projects.map(project =>
        <div className={project.project_class}>
            <div className="project__title">{project.name}</div>
            <div className="project__subtitle">
                <h4>{project.technologies}</h4>
                <img src={github_icon} alt="github"/>
            </div>  
        </div>
    )

    return(
        <div className="projects__wrapper">
           {renderProjects}
        </div>
    )
}

export default Projects;