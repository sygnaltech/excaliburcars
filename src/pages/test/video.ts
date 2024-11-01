
/*
 * Page | Test | Video
 */

import { IModule } from "@sygnal/sse";
 

export class TestVideoPage implements IModule {

  constructor() {
  }

  setup() {
        
  }

  exec() {

    console.log("VIDEO PAGE")

    const playButton = document.getElementById('playButton') as HTMLButtonElement | null;
//    const mutedButton = document.getElementById('mutedButton') as HTMLButtonElement | null;
    const videoElement = document.getElementById('video') as HTMLVideoElement | null;
//    const applyButton = document.getElementById('apply') as HTMLButtonElement | null;
    
    if (!playButton || !videoElement) {
        console.error("One or more elements were not found in the DOM.");
    } else {
        console.log("video", videoElement);
    
        // Utility function to check if video is playing
        function isVideoPlaying(video: HTMLVideoElement): boolean {
            return !!(
                video.currentTime > 0 &&
                !video.paused &&
                !video.ended &&
                video.readyState > 2
            );
        }
    
        // Play button click event listener
        playButton.addEventListener('click', () => {
            if (isVideoPlaying(videoElement)) {
                // If video is playing and muted, unmute and restart
                if (videoElement.muted) {
                    videoElement.muted = false;
                    videoElement.currentTime = 0; // Restart video from the beginning
                    console.log("Video unmuted and restarted.");
                } else {
                    // If video is playing and unmuted, pause it
                    videoElement.pause();
                    console.log("Video paused.");
                }
            } else {
                // If video is paused or stopped, ensure unmuted and play from current position
                videoElement.muted = false;
                videoElement.play()
                    .then(() => {
                        console.log("Video unmuted and started/resumed playing.");
                    })
                    .catch((error) => {
                        console.error("Error trying to play the video:", error);
                    });
            }
        });
    
        // // Mute button click event listener
        // mutedButton.addEventListener('click', () => {
        //     videoElement.muted = !videoElement.muted;
        //     if (videoElement.muted) {
        //         console.log("Video muted.");
        //     } else {
        //         console.log("Video unmuted.");
        //     }
        // });
    
        // // Add an event listener for the timeupdate event
        // videoElement.addEventListener('timeupdate', () => {
        //     // Using 'loggedTenSeconds' property, add it to the HTMLVideoElement type by type assertion
        //     const extendedVideoElement = videoElement as HTMLVideoElement & { loggedTenSeconds?: boolean };
            
        //     if (extendedVideoElement.currentTime >= 10 && !extendedVideoElement.loggedTenSeconds) {
        //         console.log("Video has passed 10 seconds of playback.");
        //         extendedVideoElement.loggedTenSeconds = true; // Avoid logging more than once
    
        //         // Enable the button
        //         applyButton.classList.remove('disabled');
        //         applyButton.removeAttribute('disabled');
        //     }
        // });
    }
    


  }

}
