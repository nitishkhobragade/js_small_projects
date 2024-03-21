let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause"); 
        ctrlIcon.classList.add("fa-play"); 
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause"); 
        ctrlIcon.classList.remove("fa-play"); 
    }
}

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}

// setting up sound volume
let volumeRange = document.getElementById("volumeRange");

// Set initial volume to 100%
song.volume = volumeRange.value / 100;

// Update volume when volumeRange changes
volumeRange.oninput = function() {
    song.volume = volumeRange.value / 100;
}

// setting up different songs 
let currentIndex = 0;
const playlist = [
    // all songs list 
    {
        title: "Dhagala Lagli Kala",
        artist: "Dada Kondke",
        thumbnail: "./media/thumb/dhagala-lagli.jpg",
        audioSource: "./media/audio/Dhagala-Lagli-Kala.mp3"
    },
    {
        title: "Bhool Bhulaiya 2 Title Track",
        artist: "Neeraj Shridhar, MellowD, Bob",
        thumbnail: "./media/thumb/bhool_bhulaiya2_title_track.jpg",
        audioSource: "./media/audio/Bhool Bhulaiyaa 2 Title Track - Bhool Bhulaiyaa 2 128 Kbps.mp3"
    },
    // next song
    {
        title: "Abrar's Entry Jamal Kudu",
        artist: "Harshvardhan Rameshwar",
        thumbnail: "./media/thumb/jamal_kudu.jpg",
        audioSource: "./media/audio/Abrars Entry Jamal Kudu - Animal 128 Kbps.mp3"
    },
    // next song
    {
        title: "De Taali - Bhool Bhulaiya 2",
        artist: "Yo Yo Honey Singh, Armaan Malik, Shaswat Singh",
        thumbnail: "./media/thumb/de_taali.jpg",
        audioSource: "./media/audio/De Taali - Bhool Bhulaiyaa 2 128 Kbps.mp3"
    },
    // next song
    {
        title: "Arjan Vailly - Animal",
        artist: "Neeraj Shridhar, MellowD, Bob",
        thumbnail: "./media/thumb/arjan_vailly.jpg",
        audioSource: "./media/audio/Arjan Vailly - Animal 128 Kbps.mp3"
    },
    // next song
];

function loadSong(index) {
    let currentSong = playlist[index];
    document.getElementById("thumbnail").src = currentSong.thumbnail;
    document.getElementById("songTitle").textContent = currentSong.title;
    document.getElementById("artist").textContent = currentSong.artist;
    document.getElementById("audioSource").src = currentSong.audioSource;
    document.getElementById("song").load();
}

function nextSong() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(currentIndex);
    document.getElementById("song").load();
    song.play();

}

function prevSong() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentIndex);
    document.getElementById("song").load();
    song.play();
    
}

// Initial load
loadSong(currentIndex);