# CodeAlpha_Music_Player
# 🎵 Music Player

A fully-featured music player web application with a sleek, modern interface. 
Features include playlist management, repeat/shuffle modes, volume control, 
and keyboard shortcuts. Built with vanilla JavaScript for smooth performance.

## ✨ Features

### Core Controls
- ✅ **Play/Pause** - Start and pause music playback
- ✅ **Next/Previous** - Navigate through your playlist
- ✅ **Progress Bar** - Seek to any point in the song
- ✅ **Volume Control** - Adjust volume with slider
- ✅ **Time Display** - Current time and total duration

### Playlist Features
- ✅ **Playlist Management** - View and click to play any song
- ✅ **Song Info Display** - Title, artist, and album art
- ✅ **Active Indicator** - See which song is playing

### Advanced Features
- ✅ **Repeat Modes**
  - Repeat All (default)
  - Repeat One (repeat current song)
  - Repeat Off
- ✅ **Shuffle Mode** - Random song selection
- ✅ **Autoplay** - Automatically play next song when current ends
- ✅ **Keyboard Shortcuts**
  - Space: Play/Pause
  - Arrow Right: Next song
  - Arrow Left: Previous song

### UI/UX Features
- ✅ **Beautiful Animations** - Bouncing equalizer on album art
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern Gradient** - Purple and violet color scheme
- ✅ **Smooth Transitions** - All interactions are fluid
- ✅ **Album Art Display** - Show cover image for each song

## 🛠️ Technologies Used

- **HTML5** - Semantic markup & audio element
- **CSS3** - Flexbox, gradients, animations
- **JavaScript (Vanilla)** - Audio control & playlist logic
- **Web Audio API** - No external libraries needed

## 📂 Project Structure
music-player/
├── index.html      # HTML structure
├── style.css       # Styling & animations
├── script.js       # Player logic & controls
├── music/          # Folder for audio files (optional)
│   ├── song1.mp3
│   ├── song2.mp3
│   └── ...
└── README.md       # This file
## 🚀 Getting Started

### Installation
1. Clone this repository:
```bash
git clone https://github.com/yourusername/CodeAlpha_MusicPlayer.git
cd CodeAlpha_MusicPlayer
```

2. Open in your browser:
```bash
# Simply double-click index.html
```

### Adding Your Music

Edit `script.js` and modify the `playlist` array:

```javascript
const playlist = [
    {
        title: 'Song Name',
        artist: 'Artist Name',
        src: 'link-to-song.mp3',      // Local path or URL
        cover: 'link-to-cover.jpg'    // Album art image
    },
    // Add more songs...
];
```

**For local files:**
```javascript
const playlist = [
    {
        title: 'My Song',
        artist: 'My Artist',
        src: 'music/my-song.mp3',     // Local file
        cover: 'images/cover.jpg'
    }
];
```

### Usage
1. Click **Play** button to start music
2. Use **Next/Previous** buttons to navigate
3. Drag **progress bar** to seek
4. Adjust **volume slider** to control sound
5. Click **Playlist** to view all songs
6. Use buttons for Repeat, Shuffle, Autoplay modes

## 🎨 Color Scheme

- **Primary Gradient**: Blue (#667eea) → Purple (#764ba2)
- **Background**: Dark (#2d2d44)
- **Controls**: Dark gray (#404057)
- **Accents**: Green (#51cf66), Yellow (#ffa502)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space | Play/Pause |
| → | Next Song |
| ← | Previous Song |

## 💡 Learning Points

- HTML5 Audio API usage
- Real-time audio property manipulation
- DOM manipulation & event handling
- Array methods (map, filter, forEach)
- Responsive design principles
- CSS animations & transitions
- Keyboard event handling

## 🎯 Future Enhancements

- [ ] Save favorite songs
- [ ] Search/filter songs
- [ ] Drag-to-reorder playlist
- [ ] Lyrics display
- [ ] Equalizer visualization
- [ ] Dark/Light theme toggle
- [ ] Save user preferences
- [ ] Last.fm integration
- [ ] Fullscreen mode

## 📱 Browser Support

- Chrome ✓
- Firefox ✓
- Safari ✓ (iOS 14+)
- Edge ✓
- Mobile browsers ✓

## 🔊 Audio Format Support

- MP3 (.mp3)
- WAV (.wav)
- OGG (.ogg)
- M4A (.m4a)

## 📊 Features Breakdown

| Feature | Status | Notes |
|---------|--------|-------|
| Play/Pause | ✅ Complete | Works smoothly |
| Progress Bar | ✅ Complete | Seekable |
| Volume Control | ✅ Complete | 0-100% |
| Playlist | ✅ Complete | Click to play |
| Repeat Modes | ✅ Complete | 3 modes |
| Shuffle | ✅ Complete | Randomize order |
| Autoplay | ✅ Complete | Auto-next song |
| Keyboard | ✅ Complete | Full support |

## 📸 Screenshots
[Add screenshots of player interface here]
## 🤝 Contributing

Have ideas for improvements? Fork the repository and submit a pull request!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**
- GitHub: [@student-asma](https://github.com/student-asma)
- LinkedIn: https://www.linkedin.com/in/asma-yousaf-b3a40534b/

## 🙏 Acknowledgments

- CodeAlpha Internship Program
- Inspired by modern music player designs
- Sound files from various royalty-free sources

## 📝 Notes

- For production, consider using a backend for playlist management
- Consider using Web Workers for better performance
- Add analytics to track user listening habits
- Implement service workers for offline functionality

---

**Enjoy Your Music! 🎶**
