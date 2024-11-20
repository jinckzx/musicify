import axios from 'axios';
import { SPOTIFY_CONFIG } from '../config/spotify';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

class SpotifyService {
  private accessToken: string | null = null;

  constructor() {
    // Check if there's a token in localStorage
    this.accessToken = localStorage.getItem('spotify_access_token');
  }

  getAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: SPOTIFY_CONFIG.CLIENT_ID,
      response_type: 'token',
      redirect_uri: SPOTIFY_CONFIG.REDIRECT_URI,
      scope: SPOTIFY_CONFIG.SCOPES,
    });
    return `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('spotify_access_token', token);
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    if (!this.accessToken) {
      throw new Error('No access token available');
    }

    const response = await fetch(`${SPOTIFY_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Token expired or invalid
        localStorage.removeItem('spotify_access_token');
        this.accessToken = null;
        window.location.href = this.getAuthUrl();
        throw new Error('Authentication required');
      }
      throw new Error('Spotify API request failed');
    }

    return response.json();
  }

  async getCurrentUserProfile() {
    return this.request('/me');
  }

  async getUserPlaylists() {
    return this.request('/me/playlists');
  }

  async getPlaylist(playlistId: string) {
    return this.request(`/playlists/${playlistId}`);
  }

  async searchTracks(query: string) {
    return this.request(`/search?type=track&q=${encodeURIComponent(query)}`);
  }

  async getRecommendations(seedTracks: string[]) {
    const params = new URLSearchParams({
      seed_tracks: seedTracks.join(','),
    });
    return this.request(`/recommendations?${params.toString()}`);
  }

  async getMyTopTracks() {
    return this.request('/me/top/tracks');
  }
}

export const spotifyService = new SpotifyService();