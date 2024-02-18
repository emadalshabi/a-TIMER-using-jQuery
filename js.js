$(document).ready(function() {
    var timer;
    var timeLeft = 25 * 60;
    var isRunning = false;
    var display = $('#display');
    
    function startTimer(duration) {
      var timerDisplay = display;
      var start = Date.now();
      var diff, minutes, seconds;
  
      function timerTick() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        timerDisplay.text(minutes + ':' + seconds);
        
        if (diff <= 0) {
          clearInterval(timer);
          timer = null;
          isRunning = false;
          timerDisplay.text('00:00');
          $('#alarm')[0].play(); 
        }
      }
      
      timerTick();
      
      timer = setInterval(timerTick, 1000);
    }
    
    function resetTimer() {
      clearInterval(timer);
      timer = null;
      isRunning = false;
      timeLeft = 25 * 60;
      display.text('25:00');
    }
    
    $('#start').click(function() {
      if (!isRunning) {
        startTimer(timeLeft);
        isRunning = true;
      }
    });
    
    $('#reset').click(function() {
      resetTimer();
    });
  });
  