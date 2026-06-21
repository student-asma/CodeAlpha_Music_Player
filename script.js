// Music Data - Modify with your songs
const playlist = [
    {
        title: 'Summer Vibes',
        artist: 'The Dreamer',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    },
    {
        title: 'Midnight Echo',
        artist: 'Luna Nights',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
        title: 'Electric Dreams',
        artist: 'Neon Valley',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop'
    },
    {
        title: 'Ocean Waves',
        artist: 'Coastal Sounds',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
    },
    {
        title: 'Urban Nights',
        artist: 'City Lights',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        cover: 'https://images.unsplash.com/photo-1487203139452-2a5b24a30d6f?w=300&h=300&fit=crop'
    }
];

// Variables
let currentTrackIndex = 0;
let isPlaying = false;
let repeat = 'all'; // 'all', 'one', or 'off'
let shuffle = false;
let autoplay = true;

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const albumImg = document.getElementById('albumImg');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const progressRange = document.getElementById('progressRange');
const progress = document.getElementById('progress');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const playlistContainer = document.getElementById('playlistContainer');
const playlistItems = document.getElementById('playlistItems');
const repeatBtn = document.getElementById('repeatBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const autoplayBtn = document.getElementById('autoplayBtn');

// Initialize
function init() {
    loadPlaylist();
    loadTrack(0);
    updateVolumeDisplay();
    audio.volume = volumeSlider.value / 100;
}

// Load Playlist
function loadPlaylist() {
    playlistItems.innerHTML = '';
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.onclick = () => loadTrack(index);
        playlistItems.appendChild(li);
    });
    updatePlaylistDisplay();
}

// Update Playlist Display
function updatePlaylistDisplay() {
    document.querySelectorAll('.playlist-items li').forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentTrackIndex) {
            item.classList.add('active');
        }
    });
}

// Load Track
function loadTrack(index) {
    currentTrackIndex = index;
    const track = playlist[currentTrackIndex];
    
    audio.src = track.src;
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    albumImg.src = track.cover;
    
    updatePlaylistDisplay();
}

// Toggle Play/Pause
function togglePlay() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

// Play Track
function playTrack() {
    audio.play();
    isPlaying = true;
    playIcon.textContent = '⏸';
    playBtn.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.6)';
}

// Pause Track
function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playIcon.textContent = '▶';
    playBtn.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
}

// Next Song
function nextSong() {
    if (shuffle) {
        currentTrackIndex = Math.floor(Math.random() * playlist.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
}

// Previous Song
function previousSong() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
}

// Update Time
function updateTime() {
    const { currentTime, duration } = audio;
    
    // Update progress bar
    let percent = (currentTime / duration) * 100;
    progress.style.width = percent + '%';
    progressRange.value = percent;
    
    // Update current time
    currentTimeEl.textContent = formatTime(currentTime);
    
    // Update duration
    if (duration) {
        durationEl.textContent = formatTime(duration);
    }
}

// Format Time
function formatTime(time) {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update Volume Display
function updateVolumeDisplay() {
    volumeValue.textContent = volumeSlider.value + '%';
}

// Toggle Repeat
function toggleRepeat() {
    const modes = ['all', 'one', 'off'];
    const currentIndex = modes.indexOf(repeat);
    repeat = modes[(currentIndex + 1) % modes.length];
    
    const status = {
        'all': 'All',
        'one': 'One',
        'off': 'Off'
    };
    
    document.getElementById('repeatStatus').textContent = status[repeat];
    
    if (repeat !== 'off') {
        repeatBtn.classList.add('active');
    } else {
        repeatBtn.classList.remove('active');
    }
}

// Toggle Shuffle
function toggleShuffle() {
    shuffle = !shuffle;
    document.getElementById('shuffleStatus').textContent = shuffle ? 'On' : 'Off';
    
    if (shuffle) {
        shuffleBtn.classList.add('active');
    } else {
        shuffleBtn.classList.remove('active');
    }
}

// Toggle Autoplay
function toggleAutoplay() {
    autoplay = !autoplay;
    document.getElementById('autoplayStatus').textContent = autoplay ? 'On' : 'Off';
    
    if (autoplay) {
        autoplayBtn.classList.add('active');
    } else {
        autoplayBtn.classList.remove('active');
    }
}

// Toggle Playlist
function togglePlaylist() {
    playlistContainer.classList.toggle('active');
}

// Event Listeners
audio.addEventListener('timeupdate', updateTime);

audio.addEventListener('ended', () => {
    if (repeat === 'one') {
        audio.currentTime = 0;
        playTrack();
    } else if (autoplay) {
        nextSong();
    } else {
        pauseTrack();
    }
});

progressRange.addEventListener('change', (e) => {
    audio.currentTime = (e.target.value / 100) * audio.duration;
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
    updateVolumeDisplay();
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    }
    if (e.code === 'ArrowRight') {
        nextSong();
    }
    if (e.code === 'ArrowLeft') {
        previousSong();
    }
});

// Initialize on load
window.addEventListener('load', init);