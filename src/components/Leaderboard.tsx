import React, { useState } from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Leaderboard = () => {
  // Simulated leaderboard data
  const [teams] = useState([
    { rank: 1, name: 'Tech Titans', score: 95, college: 'CBIT', track: 'AI/ML' },
    { rank: 2, name: 'Code Crusaders', score: 92, college: 'BITS Pilani', track: 'Web3' },
    { rank: 3, name: 'Binary Beasts', score: 88, college: 'IIT Bombay', track: 'FinTech' },
    { rank: 4, name: 'Data Dragons', score: 85, college: 'VIT', track: 'AI/ML' },
    { rank: 5, name: 'Quantum Questers', score: 82, college: 'IIIT Hyderabad', track: 'Web3' },
  ]);

  return (
    <section className="py-20 px-4" id="leaderboard">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Leaderboard</h2>
        
        <div className="bg-gray-800/50 rounded-xl border border-purple-500/20 overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-400 mb-4">
              <div className="col-span-1">Rank</div>
              <div className="col-span-2">Team</div>
              <div className="col-span-1">Score</div>
              <div className="col-span-1">Track</div>
              <div className="col-span-1">College</div>
            </div>
            
            <div className="space-y-4">
              {teams.map((team) => (
                <div
                  key={team.rank}
                  className={`grid grid-cols-6 gap-4 p-4 rounded-lg ${
                    team.rank <= 3
                      ? 'bg-purple-900/20 border border-purple-500/20'
                      : 'bg-gray-900/50'
                  }`}
                >
                  <div className="col-span-1 flex items-center">
                    {team.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500 mr-2" />}
                    {team.rank === 2 && <Award className="w-5 h-5 text-gray-400 mr-2" />}
                    {team.rank === 3 && <Star className="w-5 h-5 text-orange-400 mr-2" />}
                    <span className={team.rank <= 3 ? 'font-bold' : ''}>{team.rank}</span>
                  </div>
                  <div className="col-span-2 font-medium">{team.name}</div>
                  <div className="col-span-1">{team.score}</div>
                  <div className="col-span-1">
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-700">
                      {team.track}
                    </span>
                  </div>
                  <div className="col-span-1 text-gray-400">{team.college}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;