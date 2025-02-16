import React from "react";
import './Projects.sass';

interface ProjectsProps {
    name: string;
    languages: string;
    description?: string;
    url: string;
}

const Projects: React.FC<ProjectsProps> = ({name, languages, description, url}) => {
    return(
        <div>
        
        </div>
    );
}

export default Projects;