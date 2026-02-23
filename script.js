const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const start = document.getElementById("start");
const next = document.getElementById("next");
const previus = document.getElementById("previus");

const sledGehammer = {
    songName: "Sledgehammer",
    artist: "Rihanna",
    file: "sledgehammer"
};
const depecheMode = {
    songName: "Enjoy the Silence",
    artist: "Depechemode",
    file: "enjoythesilence"
};
const givenUp = {
    songName: "Given Up",
    artist: "Linkin Park",
    file: "givenup"
};
songName.innerText = "Sledgehammer";
let isPlaying = false;
const playlist = [sledGehammer, depecheMode, givenUp];
let index = 0;
function songStart(){
    start.querySelector(".bi").classList.remove("bi-play-circle-fill");
    start.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}
function pauseStart(){
    start.querySelector(".bi").classList.add("bi-play-circle-fill");
    start.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}
function playPauseDecider(){
    if (isPlaying == true){
        pauseStart()
    }
    else{
        songStart();
    }
}
function initializeSong(){
    cover.src = `img/${playlist[index].file}.webp`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText=playlist[index].songName;
    bandName.innerText=playlist[index].artist;
}
function previusSong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playsong();
}

function nextSong(){
    if(index === playlist.length -1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playsong();
}
initializeSong();

start.addEventListener("click", playPauseDecider);
previus.addEventListener("click", previusSong);
next.addEventListener("click", nextSong);
