
import ProjectCard from '@/components/ProjectCard';
import { useProjects } from '@/lib/useProjects';
import Header from '@/components/Header';
import { Skeleton } from '@/components/ui/skeleton';

const Works = () => {
  const { data: projects, isLoading, isError } = useProjects();

  // Projects are already sorted by publishDate in useProjects
  const sortedProjects = projects || [];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-96 w-full" />)}
        </div>
      );
    }
    if (isError) {
      return <p className="text-destructive">Error loading projects. Please check the Google Sheet URL and try again.</p>;
    }
    if (!sortedProjects || sortedProjects.length === 0) {
      return <p className="text-muted-foreground">No projects to display yet. Submit one to get started!</p>;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <Header />
      <main className="mt-8">
        <h2 className="text-3xl font-bold mb-6">All Works</h2>
        {renderContent()}
      </main>
    </div>
  );
};

export default Works;
