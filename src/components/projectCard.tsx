import React from 'react';
import type { Ref } from 'react';
import ProjectLinks from './projectLinks';

type ProjectCardProps = {
    title: string;
    imageSrc: string;
    imageBg: string;
    altText: string;
    githubUrl: string;
    webUrl: string;
    ref?: Ref<HTMLDivElement>; // Changed from LegacyRef to Ref
    className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    imageSrc,
    imageBg,
    altText,
    githubUrl,
    webUrl,
    ref,
    className = '',
}) => {
    return (
        <div ref={ref} className={`project group relative ${className}`}>
            <div className={`image-wrapper ${imageBg}`}>
                <img src={imageSrc} alt={altText} />
            </div>
            <h2>{title}</h2>
            <ProjectLinks githubUrl={githubUrl} webUrl={webUrl} />
        </div>
    );
};

export default ProjectCard;