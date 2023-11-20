var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").textContent = video.volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("Video Slowed To ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.1 * video.playbackRate;
	console.log("Video Sped Up To ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currenTime + 10 > video.duration){
		video.currenTime = 0;
	}

	else{
		video.currenTime = video.currenTime + 10;
	}

	console.log("Current Location Of The Video ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.volume = 0;
	document.querySelector("#mute").textContent = "Muted";
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.getElementById("volume").textContent = video.volume;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});



