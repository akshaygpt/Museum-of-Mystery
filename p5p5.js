var x = document.getElementById('bg-audio');

function playMusic() {
  x.play();
}
function pauseMusic() {
  x.pause();
}


// webcam video
navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

navigator.getMedia(
  {video: true, audio: false},

  function(mediaStream) {
    var video = document.getElementsByTagName('video')[0];
    video.src = window.URL.createObjectURL(mediaStream);
    video.play();
  },

  function(error) {
    console.log(error);
  }
);
