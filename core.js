window.onload = function () {


(function (){


var goButton = document.getElementById("go"),
	sound = new buzz.sound("Shotgun-reloading.mp3"),
	dur = document.getElementById('duration'),
	interval = document.getElementById('interval'),
	err = document.getElementById('errorMessage');


if(goButton) {
	goButton.addEventListener("click", function () {
		play();
	});	
}


function play() {
	pattern = /^[0-9]+$/;

	if (pattern.test(dur.value) && pattern.test(interval.value)) {
		sound.play();
		err.innerHTML = "ok";


		console.log("dur" + dur.value);
		console.log("interval" + interval.value);
		var dur1 = dur.value;
		var timer = window.setInterval( function (){
			sound.play();
			dur1--;
			err.innerHTML = dur1 + " times will tick";
			if (dur1 == 0) clearInterval(timer);
		},interval.value*1000)
	} else {
		err.innerHTML = "enter valid data";
	}
	
}

})();

}