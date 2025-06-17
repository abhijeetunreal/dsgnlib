
import { useProjects } from '@/lib/useProjects';
import { useMemo } from 'react';

export const useContributorCounter = () => {
  const { data: projects, isLoading } = useProjects();

  const count = useMemo(() => {
    if (!projects) return 0;
    // Filter for valid, non-empty emails before creating the Set
    const emails = projects.map(p => p.email).filter(email => email && email.includes('@'));
    return new Set(emails).size;
  }, [projects]);

  return { count, isLoading };
};
