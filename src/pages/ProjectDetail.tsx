
import React from 'react';
import { useProjects } from '@/lib/useProjects';
import Header from '@/components/Header';
import NotFound from '@/pages/NotFound';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProjectDetail = ({ projectId }: { projectId?: string }) => {
  const { id } = { id: projectId };
  const { data: projects, isLoading, isError } = useProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <Header />
        <main className="mt-8 max-w-4xl mx-auto">
          <Skeleton className="h-8 w-48 mb-6 rounded-lg" />
          <div className="border-2 border-foreground rounded-lg overflow-hidden">
            <Skeleton className="w-full h-[50vh]" />
            <div className="p-6 space-y-8">
              <div className="space-y-2">
                <Skeleton className="h-10 w-3/4 rounded-md" />
                <Skeleton className="h-6 w-1/2 rounded-md" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-52 rounded-md" />
                <Skeleton className="h-24 w-full rounded-md" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-32 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <Header />
        <main className="mt-8 max-w-4xl mx-auto text-center">
          <p className="text-2xl text-destructive">Could not load project data.</p>
          <a href="#/" className="mt-4 inline-block text-primary hover:underline">Go back home</a>
        </main>
      </div>
    );
  }
  
  const project = projects?.find(p => p.id === Number(id));

  if (!project) {
    return <NotFound />;
  }

  const { studentName, projectName, imageUrls, description, tags } = project;
  const hasMultipleImages = imageUrls.length > 1;

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <Header />
      <main className="mt-8 max-w-4xl mx-auto">
        <a href="#/works" className="inline-flex items-center gap-2 mb-6 hover:text-primary transition-colors">
          <ArrowLeft size={16} />
          Back to Works
        </a>
        <div className="border bg-card rounded-lg shadow-md overflow-hidden">
          <div className="overflow-hidden border-b">
            {hasMultipleImages ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {imageUrls.map((imageUrl, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={imageUrl} 
                        alt={`${projectName} - Image ${index + 1}`}
                        className="w-full h-[50vh] object-cover" 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            ) : (
              <img 
                src={imageUrls[0]} 
                alt={projectName} 
                className="w-full h-[50vh] object-cover" 
              />
            )}
          </div>
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold">{projectName}</h1>
                <p className="text-muted-foreground text-lg">{studentName}</p>
              </div>
            </div>

            <div className="mt-6 border-t border-dashed pt-6">
              <h2 className="text-xl font-bold mb-2">About this project</h2>
              <p className="text-muted-foreground whitespace-pre-wrap">{description}</p>
            </div>
            
            <div className="mt-6 border-t border-dashed pt-6">
              <h2 className="text-xl font-bold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
