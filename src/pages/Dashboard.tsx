import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Player } from '../components/Player';
import { MusicGrid } from '../components/MusicGrid';
import { spotifyService } from '../services/spotify';
import { usePlayerStore } from '../store/playerStore';

export function Dashboard() {
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCurrentSong } = usePlayerStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await spotifyService.getMyTopTracks();
        setTopTracks(response.items);
      } catch (error) {
        console.error('Failed to fetch top tracks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Your Top Tracks</h1>
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <MusicGrid songs={topTracks} />
          )}
        </div>
      </main>
      <Player />
    </div>
  );
}