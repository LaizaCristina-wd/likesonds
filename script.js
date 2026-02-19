const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const start = document.getElementById("start");

songName.innerText = "Sledgehammer";
let isPlaying = false;

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
start.addEventListener("click", playPauseDecider);
