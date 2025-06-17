
import Header from '@/components/Header';
import Leaderboard from '@/components/Leaderboard';
import ProjectCard from '@/components/ProjectCard';
import { useProjects } from '@/lib/useProjects';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { data: projects, isLoading, isError } = useProjects();

  // Take first 6 projects (already sorted by publishDate in useProjects)
  const featuredProjects = projects ? projects.slice(0, 6) : [];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-96 w-full" />)}
        </div>
      );
    }
    if (isError) {
      return <p className="text-destructive">Error loading projects. Please check the Google Sheet URL and try again.</p>;
    }
    if (featuredProjects.length === 0) {
      return <p className="text-muted-foreground">No projects to display yet. Check back soon!</p>;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <Header />
      <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Featured Works</h2>
            <a href="#/works" className="text-lg hover:text-primary transition-colors hidden md:block">
              View All &rarr;
            </a>
          </div>
          {renderContent()}
          <a href="#/works" className="text-lg hover:text-primary transition-colors md:hidden text-center block mt-6">
            View All &rarr;
          </a>
        </section>
        <section className="lg:col-span-1">
          <Leaderboard limit={5} />
        </section>
      </main>
      <footer className="text-center mt-12 py-4 border-t text-muted-foreground">
        <p>DSGN.LIB // 2025 // A Brutalist Digital Archive</p>
      </footer>
    </div>
  );
};

export default Index;
