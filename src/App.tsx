
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Works from "./pages/Works";
import LeaderboardPage from "./pages/LeaderboardPage";
import Submit from "./pages/Submit";
import Merch from "./pages/Merch";
import ProjectDetail from "./pages/ProjectDetail";
import { ThemeProvider } from "./components/ThemeProvider";
import { useSimpleRouter } from "./hooks/useSimpleRouter";

const queryClient = new QueryClient();

const App = () => {
  const { parts } = useSimpleRouter();

  const page = parts[0] || '';

  const renderPage = () => {
    switch (page) {
      case '':
        return <Landing />;
      case 'home':
        return <Home />;
      case 'works':
        return <Works />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'submit':
        return <Submit />;
      case 'merch':
        return <Merch />;
      case 'project':
        if (parts[1]) {
          return <ProjectDetail projectId={parts[1]} />;
        }
        return <NotFound />;
      default:
        return <NotFound />;
    }
  };
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dsgn-lib-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {renderPage()}
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
