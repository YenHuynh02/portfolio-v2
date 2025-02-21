import React from "react";
import './Projects.sass';

interface ProjectsProps {
    name: string;
    languages: string;
    description?: string;
    background: string;
    url: string;
}

const Projects: React.FC<ProjectsProps> = ({ name, languages, description, background, url }) => {
    return (
        <div className="projects-wrapper" style={{ backgroundImage: `url(${background})` }}>
            <div className="inner-box">
                <h1>{name}</h1>
                <p>{languages}</p>
                <p>{description}</p>
                <a href={url}>Visit Project</a>
            </div>
        </div>
    );
}

export default Projects;