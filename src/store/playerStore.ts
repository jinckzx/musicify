import { create } from 'zustand';
import { Song } from '../types/music';

interface PlayerStore {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  setCurrentSong: (song: Song) => void;
  setIsPlaying: (status: boolean) => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (status) => set({ isPlaying: status }),
  addToQueue: (song) => set((state) => ({ queue: [...state.queue, song] })),
  removeFromQueue: (songId) =>
    set((state) => ({
      queue: state.queue.filter((song) => song._id !== songId),
    })),
}));