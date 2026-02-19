const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const start = document.getElementById("start");

songName.innerText = "Sledgehammer";

function songStart(){
    song.play();
}
start.addEventListener("click", songStart);
song.pause()