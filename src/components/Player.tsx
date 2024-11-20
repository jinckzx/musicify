import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const { currentSong, isPlaying, setIsPlaying } = usePlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong, setIsPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('timeupdate', updateTime);
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return null;

  const progress = audioRef.current
    ? (currentTime / audioRef.current.duration) * 100
    : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black p-4">
      <audio
        ref={audioRef}
        src={currentSong.audioUrl || undefined}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src={currentSong.coverUrl}
            alt={currentSong.title}
            className="w-14 h-14 rounded"
          />
          <div>
            <div className="text-white font-medium">{currentSong.title}</div>
            <div className="text-gray-400 text-sm">{currentSong.artist}</div>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1 max-w-2xl mx-8">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button
              className="bg-white rounded-full p-2 hover:scale-105 transition"
              onClick={togglePlay}
              disabled={!currentSong.audioUrl}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center space-x-2 text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full">
              <div
                className="bg-green-500 h-full rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>{audioRef.current ? formatTime(audioRef.current.duration || 30) : '0:30'}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {currentSong.audioUrl ? (
            <Volume2 size={20} className="text-gray-400" />
          ) : (
            <VolumeX size={20} className="text-yellow-500" />
          )}
        </div>
      </div>
    </div>
  );
};