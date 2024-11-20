export const SPOTIFY_CONFIG = {
  CLIENT_ID: '8ca86e34b0e2415d880110ef59f756c8', // Add your Spotify Client ID here
  REDIRECT_URI: 'https://musicify-one.vercel.app/callback',
  SCOPES: [
    'user-read-private',
    'user-read-email',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-playback-state',
    'user-modify-playback-state'
  ].join(' ')
};
