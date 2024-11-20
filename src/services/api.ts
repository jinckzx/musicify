import axios from 'axios';
import { Song, PlaylistType } from '../types/music';

const API_URL = 'http://localhost:5000/api';

export const api = {
  async getSongs(): Promise<Song[]> {
    const response = await axios.get(`${API_URL}/songs`);
    return response.data;
  },

  async getPlaylists(): Promise<PlaylistType[]> {
    const response = await axios.get(`${API_URL}/playlists`);
    return response.data;
  },

  async uploadSong(formData: FormData): Promise<Song> {
    const response = await axios.post(`${API_URL}/songs/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};