var Controls = (function(){
	//Cache DOM
	var control_module = document.querySelector('.control_module'),
			start_game =  control_module.querySelector('.start'),
			clock = document.querySelector('.clock');
	//button - start!
	start_game.addEventListener('click', start);
  //==== METHODS ====
	//start game!!
	function start(){
		var timer = 120;
		var interval = setInterval(function(){
			var minutes = parseInt(timer / 60, 10),
					seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
	  	seconds = seconds < 10 ? "0" + seconds : seconds;
			//update the clock
			clock.innerHTML = minutes + ": " + seconds;
			//if the timer is less than zero, stop the clock ...temp
			if(--timer < 0){
				clearInterval(interval);
			}
    //end interval
		}, 1000);
	}//end start

})();
