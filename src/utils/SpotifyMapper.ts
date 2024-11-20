import { SpotifyTrack, Song } from '../types/music';

export const mapSpotifyTrackToSong = (track: SpotifyTrack): Song => ({
  _id: track.id,
  title: track.name,
  artist: track.artists.map(artist => artist.name).join(', '),
  album: track.album.name,
  duration: track.duration_ms,
  coverUrl: track.album.images[0]?.url || '',
  audioUrl: track.preview_url
});