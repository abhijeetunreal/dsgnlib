
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ContributorCounter from '@/components/ContributorCounter';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Clean, minimal header */}
      <header className="border-b p-4">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-4xl font-bold">DSGN.LIB</h1>
        </div>
      </header>

      {/* Minimal hero section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Main title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              A Brutalist Digital Archive
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Showcase your work. Build your reputation.
            </p>
          </div>

          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#/home" className="inline-flex items-center gap-2">
                Explore Works
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#/submit">
                Submit Work
              </a>
            </Button>
          </div>

          {/* Contributor counter */}
          <div className="pt-8">
            <ContributorCounter />
          </div>
        </div>
      </main>

      {/* Clean footer matching other pages */}
      <footer className="text-center py-6 border-t text-muted-foreground">
        <p>DSGN.LIB // 2025 // A Brutalist Digital Archive</p>
      </footer>
    </div>
  );
};

export default Landing;
