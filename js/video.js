const video = document.getElementById("bvid");

video.addEventListener("mouseover", function () {
    this.play();
});

video.addEventListener("mouseout", function () {
    this.pause();
    this.currentTime = 0;
});