"use strict";
(() => {
  // src/pages/home.ts
  var HomePage = class {
    constructor() {
    }
    setup() {
    }
    exec() {
      this.videoUnmute();
    }
    videoUnmute() {
      const playButton = document.getElementById("playButton");
      const videoElement = document.getElementById("video");
      if (!playButton || !videoElement) {
        console.error("One or more elements were not found in the DOM.");
      } else {
        let isVideoPlaying2 = function(video) {
          return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
        };
        var isVideoPlaying = isVideoPlaying2;
        console.log("video", videoElement);
        playButton.addEventListener("click", () => {
          if (isVideoPlaying2(videoElement)) {
            if (videoElement.muted) {
              videoElement.muted = false;
              videoElement.currentTime = 0;
              console.log("Video unmuted and restarted.");
            } else {
              videoElement.pause();
              console.log("Video paused.");
            }
          } else {
            videoElement.muted = false;
            videoElement.play().then(() => {
              console.log("Video unmuted and started/resumed playing.");
            }).catch((error) => {
              console.error("Error trying to play the video:", error);
            });
          }
        });
      }
    }
  };
})();
//# sourceMappingURL=home.js.map
