import React from 'react';
import { Music } from 'lucide-react';
import { spotifyService } from '../services/spotify';

export function Login() {
  const handleLogin = () => {
    window.location.href = spotifyService.getAuthUrl();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Music size={64} className="text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-8">Welcome to Musicify</h1>
        <button
          onClick={handleLogin}
          className="bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-400 transition"
        >
          Login with Spotify
        </button>
      </div>
    </div>
  );
}