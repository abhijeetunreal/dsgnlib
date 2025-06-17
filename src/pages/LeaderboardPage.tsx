
import Header from '@/components/Header';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <Header />
      <main className="mt-8">
        <div className="max-w-4xl mx-auto">
          <Leaderboard />
        </div>
      </main>
    </div>
  );
};

export default LeaderboardPage;
