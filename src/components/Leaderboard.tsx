import React from 'react';
import { useProjects } from '@/lib/useProjects';
import { Award } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface LeaderboardProps {
  limit?: number;
}

interface LeaderboardEntry {
  studentName: string;
  projectCount: number;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ limit }) => {
  const { data: projects, isLoading, isError } = useProjects();
  
  const studentProjectCounts = projects
    ? projects.reduce((acc, project) => {
        // Use email as the primary unique identifier. Fallback to student name if email is missing.
        const identifier = (project.email || project.studentName || '').trim().toLowerCase();
        
        if (identifier) {
          if (!acc[identifier]) {
            acc[identifier] = { 
              studentName: project.studentName || 'Anonymous', // Store the first encountered student name
              projectCount: 0 
            };
          }
          acc[identifier].projectCount += 1;
        }
        
        return acc;
      }, {} as Record<string, LeaderboardEntry>)
    : {};

  const sortedStudents: (LeaderboardEntry & { id: string })[] = Object.entries(studentProjectCounts)
    .map(([id, data]) => ({ id, ...data }))
    .sort((a, b) => b.projectCount - a.projectCount)
    .slice(0, limit);

  return (
    <aside className="border bg-card rounded-lg shadow-md p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Award size={24} />
          Leaderboard
        </h2>
        {limit && (
          <a href="#/leaderboard" className="hover:text-primary transition-colors text-sm">View Full</a>
        )}
      </div>
      {isLoading && (
        <div className="space-y-3">
          {[...Array(limit || 5)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
        </div>
      )}
      {isError && <p className="text-sm text-destructive">Could not load leaderboard.</p>}
      {!isLoading && !isError && (
        <ol className="space-y-3">
          {sortedStudents.map((entry, index) => (
            <li key={entry.id} className="flex items-center gap-4 text-lg border-b-2 border-dashed border-border pb-3 last:border-none last:pb-0">
              <span className="font-bold text-2xl text-primary w-6 text-center">{index + 1}</span>
              <div className="truncate grow">
                <p className="font-bold truncate">{entry.studentName}</p>
                <p className="text-muted-foreground text-sm">{entry.projectCount} project{entry.projectCount !== 1 ? 's' : ''}</p>
              </div>
            </li>
          ))}
          {sortedStudents.length === 0 && <p className="text-muted-foreground">Leaderboard is empty.</p>}
        </ol>
      )}
    </aside>
  );
};

export default Leaderboard;
