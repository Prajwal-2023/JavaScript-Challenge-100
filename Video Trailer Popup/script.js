const mainImage = document.querySelector(".main img");
const watchButton = document.querySelector(".details-div button");
const videoParent = document.querySelector(".video-parent");
const videoParentVideo = document.querySelector(".video-parent video");
const closeVideoParent = document.querySelector(".video-parent span");

mainImage.addEventListener("click", () => {
  targetVideoPrevFnc();
});
watchButton.addEventListener("click", () => {
  targetVideoPrevFnc();
});

function targetVideoPrevFnc() {
  videoParent.style.display = "flex";
  videoParentVideo.muted = true;
  videoParentVideo.autoplay = true;
  videoParentVideo.play();
}

function closeVideoParentFnc() {
  closeVideoParent.addEventListener("click", () => {
    videoParent.style.display = "none";
  });
}
closeVideoParentFnc();
