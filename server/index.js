import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes will be connected to MongoDB
app.get('/api/songs', async (req, res) => {
  try {
    // This will be replaced with MongoDB query
    res.json({ message: 'Songs endpoint ready for MongoDB integration' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/playlists', async (req, res) => {
  try {
    // This will be replaced with MongoDB query
    res.json({ message: 'Playlists endpoint ready for MongoDB integration' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload endpoint for music files
app.post('/api/songs/upload', async (req, res) => {
  try {
    // This will handle file uploads and MongoDB document creation
    res.json({ message: 'Upload endpoint ready for MongoDB integration' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});