// ===== Elements =====
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

// ===== Songs list =====
const songs = [
  "songs/song1.mp3",
  "songs/song2.mp3",
  "songs/song3.mp3"
];

let songIndex = 0;
let isPlaying = false;

// ===== Load song =====
function loadSong(index) {
  audio.src = songs[index];
}

loadSong(songIndex);

// ===== Play / Pause =====
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
});


nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  isPlaying = true;
});
audio.addEventListener("ended", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
});



prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  isPlaying = true;
});


audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});


progress.addEventListener("input", () => {
  if (!isNaN(audio.duration)) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});
