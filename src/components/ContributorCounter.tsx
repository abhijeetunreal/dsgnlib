
import { Users } from 'lucide-react';
import { useContributorCounter } from '@/hooks/useContributorCounter';
import { Skeleton } from '@/components/ui/skeleton';

const ContributorCounter = () => {
  const { count, isLoading } = useContributorCounter();

  if (isLoading) {
    return (
      <div className="mt-8 flex items-center justify-center gap-2">
        <Skeleton className="h-6 w-48" />
      </div>
    );
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground animate-fade-in">
      <Users className="h-5 w-5" />
      <p className="font-medium">
        <span className="font-bold text-foreground inline-block animate-bounce-in">{count.toLocaleString()}</span> Contributors and counting!
      </p>
    </div>
  );
};

export default ContributorCounter;
