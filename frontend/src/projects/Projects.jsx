import "./Projects.scss";

function Projects(){
    const handleProjectClick = (projectURL) => {
        window.open(projectURL, "_blank");
    }

    const projects = [
        {
            name: "Sinister Escape",
            technologies: "Arduino",
            project_class: "project project__sinister-escape",
            link: "https://github.com/VladWero08/SinisterEscape",
        },
        {
            name: "DisBotify",
            technologies: "Django, React, MySQL",
            project_class: "project project__small project__disbotify",
            link: "https://github.com/VladWero08/DisBotify",
        },
        {
            name: "NetworKeen",
            technologies: "Python, Docker",
            project_class: "project project__networkeen",
            link: "https://github.com/VladWero08/NetworKeen",
        },
        {
            name: "Sparrow the Trip Planner",
            technologies: "Django, React, MySQL",
            project_class: "project project__sparrow",
            link: "https://github.com/VladWero08/SparrowTheTripPlannerBackend",
        },
        {
            name: "Brain Anomaly Detection",
            technologies: "Python, Tensorflow",
            project_class: "project project__small project__brainanomaly",
            link: "https://github.com/VladWero08/BrainAnomalyDetection",
        },
        {
            name: "ProcFS",
            technologies: "C, Libfuse",
            project_class: "project project__procfs",
            link: "https://github.com/VladWero08/ProcFS",
        },
        {
            name: "Robotics",
            technologies: "Arduino",
            project_class: "project project__small project__robotics",
            link: "https://github.com/VladWero08/IntroductionToRobotics",
        },
    ];

    const renderProjects = projects.map(project =>
        <div className={project.project_class} onClick={() => handleProjectClick(project.link)}>
            <div className="project__title">{project.name}</div>
            <div className="project__subtitle">
                <h4>{project.technologies}</h4>
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