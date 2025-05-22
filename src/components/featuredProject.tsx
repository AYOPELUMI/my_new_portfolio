import React from 'react';
import type { Ref } from 'react';
import ProjectLinks from './projectLinks';

type FeaturedProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  githubUrl: string;
  webUrl: string;
  ref?: Ref<HTMLDivElement>;
  className?: string;
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  imageSrc,
  altText,
  githubUrl,
  webUrl,
  ref,
  className = '',
}) => {
  return (
    <div ref={ref} className={`first-project-wrapper group relative ${className}`}>
      <div className="image-wrapper">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="text-content">
        <h2>{title}</h2>
        <p className="text-white-50 md:text-xl">{description}</p>
      </div>
      <ProjectLinks githubUrl={githubUrl} webUrl={webUrl} />
    </div>
  );
};

export default FeaturedProject;