
import React from 'react';
import ProjectLink from './projectLink';

type ProjectLinksProps = {
    githubUrl: string;
    webUrl: string;
    className?: string;
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ githubUrl, webUrl, className = '' }) => {
    return (
        <div className={` flex gap-3`}>
            <ProjectLink href={githubUrl} type="github" />
            <ProjectLink href={webUrl} type="web" />
        </div>
    );
};

export default ProjectLinks;