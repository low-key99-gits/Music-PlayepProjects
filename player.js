// Redirect if not logged in
if (!localStorage.getItem('loggedInUser')) {
    window.location.href = "login.html";
}

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const playlistContainer = document.getElementById('playlist');
const logoutBtn = document.getElementById('logout');

const songs = [
     { title: "Interstellar theme", artist: "Hans zimmer", file: "interstellar.mp3", cover: "image/intestallar.webp" },
    { title: "KGf BGM", artist: "Ravi Basur", file: "KGF BGm.mp3", cover: "image/kgf.jpg" },
    { title: "Man of Steel Core", artist: "Hans Zimmer", file: "man of steel.mp3", cover: "image/man of steel.webp" },
    { title: "This is My kingdom", artist: "Imagine Dragon", file: "Demons.mp3", cover: "image/demons.jpeg" },
    { title: "City of Stars", artist: "Ryan Gosling", file: "city_of_stars.mp3", cover: "image/city os stars.jpg" },
    { title: "Thor theme", artist: "Chris Hemsworth", file: "thor.mp3", cover: "image/thor.jpeg" },
    { title: "Master intro", artist: "Anirudh", file: "master_intro.mp3", cover: "image/master.jpeg" },
    { title: "GOT ", artist: "CArry", file: "thrones_theme.mp3", cover: "image/game-of-thrones-9781608872190.jpg" },
    { title: "The Dark Knight", artist: "Nolan", file: "01-hans_zimmer-a_storm_is_coming.mp3", cover: "image/Dark_knight_rises_poster.jpg" },
    { title: "Dune OST", artist: "Zimmer", file: "dune_sandworm.mp3", cover: "image/DUNE_FC.jpg" },
    { title: "Joker", artist: "Hans", file: "Joker BGM Song Bass Boosted 2020(DjJpSwami.Com).mp3", cover: "image/joker.jpeg" },
    { title: "LA LA land", artist: "Zimmer", file: "dune_sandworm.mp3", cover: "image/lala land.jpg" },
    { title: "pirets", artist: "jhonny", file: "pirates_bgm.mp3", cover: "image/pirets.jpg" },
    { title: "Rolex Entry", artist: "Suriya", file: "rolex.mp3", cover: "image/rolex.jpeg" },
    { title: "Scam 1992", artist: "Pratik", file: "rolex.mp3", cover: "image/scam 1992.jpg" },
    { title: "Spider man", artist: "tom", file: "spiderman.mp3", cover: "image/spider man.jpg" },
    { title: "Suzume", artist: "tomyy", file: "spiderman.mp3", cover: "image/Suzume_no_Tojimari_poster.jpg" },
    { title: "My heart will go on", artist: "leo", file: "titanic.mp3", cover: "image/titanic.jpg" },
    { title: "Call your namw", artist: "thimothee", file: "call_your_name.mp3", cover: "image/CallMeByYourName2017.png" },
    { title: "Attack on titan", artist: "sung lee", file: "attack_on_titan.mp3", cover: "image/attack on.jpeg" },
];
let songIndex = 0;
let isPlaying = false;

function loadSong(index) {
    audio.src = songs[index].file;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    cover.src = songs[index].cover;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    cover.style.animationPlayState = 'running';
    isPlaying = true;
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    cover.style.animationPlayState = 'paused';
    isPlaying = false;
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    playSong();
});

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    playSong();
});

audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener('ended', () => {
    nextBtn.click();
});

volume.addEventListener('input', () => {
    audio.volume = volume.value;
});



logoutBtn.addEventListener('click', () => {
    window.location.href = "logout.html";
});

loadSong(songIndex);
