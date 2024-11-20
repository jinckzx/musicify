import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Player } from '../components/Player';
import { MusicGrid } from '../components/MusicGrid';
import { spotifyService } from '../services/spotify';
import { mapSpotifyTrackToSong } from '../utils/SpotifyMapper.ts';
import { Song } from '../types/music';

export function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await spotifyService.searchTracks(query);
      const mappedSongs = response.tracks.items.map(mapSpotifyTrackToSong);
      setSearchResults(mappedSongs);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-6">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for songs, artists, or albums"
                className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </form>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : (
            searchResults.length > 0 && <MusicGrid songs={searchResults} />
          )}
        </div>
      </main>
      <Player />
    </div>
  );
}
