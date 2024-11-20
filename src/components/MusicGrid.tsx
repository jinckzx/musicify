import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';
import { Song } from '../types/music';

interface MusicGridProps {
  songs: Song[];
}

export const MusicGrid = ({ songs }: MusicGridProps) => {
  const { currentSong, isPlaying, setCurrentSong, setIsPlaying } = usePlayerStore();

  const handlePlay = (song: Song) => {
    if (!song.audioUrl) {
      console.warn('No preview available for this track');
      return;
    }

    if (currentSong?._id === song._id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {songs.map((song) => (
        <div
          key={song._id}
          className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition cursor-pointer group"
        >
          <div className="relative">
            <img
              src={song.coverUrl}
              alt={song.title}
              className="w-full aspect-square object-cover rounded-md"
            />
            <button
              onClick={() => handlePlay(song)}
              className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0"
              disabled={!song.audioUrl}
            >
              {!song.audioUrl ? (
                <VolumeX size={24} className="text-black" />
              ) : currentSong?._id === song._id && isPlaying ? (
                <Pause size={24} className="text-black" />
              ) : (
                <Play size={24} className="text-black" />
              )}
            </button>
          </div>
          <div className="mt-2">
            <h3 className="text-white font-medium truncate">{song.title}</h3>
            <p className="text-gray-400 text-sm truncate">{song.artist}</p>
            {!song.audioUrl && (
              <p className="text-yellow-500 text-xs mt-1">No preview available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};