import React from 'react';
import { Home, Search, Library, PlusCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="space-y-4">
        <div className="text-white text-2xl font-bold mb-8">Musicify</div>
        
        <nav className="space-y-4">
          <Link 
            to="/" 
            className={`flex items-center space-x-3 ${isActive('/') ? 'text-green-500' : 'text-white hover:text-green-500'}`}
          >
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link 
            to="/search" 
            className={`flex items-center space-x-3 ${isActive('/search') ? 'text-green-500' : 'text-white hover:text-green-500'}`}
          >
            <Search size={24} />
            <span>Search</span>
          </Link>
          <Link 
            to="/library" 
            className={`flex items-center space-x-3 ${isActive('/library') ? 'text-green-500' : 'text-white hover:text-green-500'}`}
          >
            <Library size={24} />
            <span>Your Library</span>
          </Link>
        </nav>

        <div className="pt-8">
          <button className="flex items-center space-x-3 text-white hover:text-green-500">
            <PlusCircle size={24} />
            <span>Create Playlist</span>
          </button>
        </div>

        <div className="pt-4">
          <div className="text-sm text-gray-400">Playlists</div>
          <div className="mt-4 space-y-2">
            <div className="text-gray-300 hover:text-white cursor-pointer">My Playlist #1</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">Favorites</div>
          </div>
        </div>
      </div>
    </div>
  );
};