var x = document.getElementById('bg-audio');

window.onload = function(){
   x.play();
}

// webcam video
// navigator.getMedia = (navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia);

// navigator.getMedia(
//   {video: true, audio: false},
//
//   function(mediaStream) {
//     var video = document.getElementsByTagName('video')[0];
//     video.src = window.URL.createObjectURL(mediaStream);
//     video.play();
//   },
//
//   function(error) {
//     console.log(error);
//   }
// );

var constraints = { audio: false, video: true};

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); });
