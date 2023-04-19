var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFun() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}