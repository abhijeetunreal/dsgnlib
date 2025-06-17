
import React from 'react';
import { Project } from '@/lib/useProjects';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, studentName, projectName, imageUrls, publishDate } = project;
  const hasMultipleImages = imageUrls.length > 1;

  return (
    <a href={`#/project/${id}`} className="block h-full group">
      <article className="bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden border">
        <div className="relative overflow-hidden">
          {hasMultipleImages ? (
            <Carousel className="w-full">
              <CarouselContent>
                {imageUrls.map((imageUrl, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={imageUrl} 
                        alt={`${projectName} - Image ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {index + 1}/{imageUrls.length}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <img 
              src={imageUrls[0]} 
              alt={projectName} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
            />
          )}
        </div>
        <div className="p-6 flex-grow">
          <div>
            <h3 className="text-xl font-bold truncate">{projectName}</h3>
            <p className="text-muted-foreground">{studentName}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {format(publishDate, 'MMM dd, yyyy')}
            </p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
