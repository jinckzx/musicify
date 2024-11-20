import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Player } from '../components/Player';

export function Library() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Your Library</h1>
          <div className="text-gray-400">
            Your saved songs and playlists will appear here
          </div>
        </div>
      </main>
      <Player />
    </div>
  );
}