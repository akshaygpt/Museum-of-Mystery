var x = document.getElementById('bg-audio');

window.onload = function(){
   x.play();
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
