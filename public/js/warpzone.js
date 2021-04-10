let warpzone = document.querySelector('.warpzone')
  
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

  if (--timer < 0) {
      timer = duration;
      // window.location.replace("/simpson");
      
      warpzone.innerHTML = `<br><h1>La paciencia se aprecia</h1><p>Por eso tenes la opcion de elegir otro mundo</p><div class="warpzone-img"><a href="/opcion4"><div class="warpzone-op1"></div></a><a href="/opcion3"><div class="warpzone-op2"></div></a><a href="/opcion2"><div class="warpzone-op3"></div></a><img src="../../images/warp_zone.jpg" alt=""></div></div>`
  }
}, 1000);
}

window.onload = function () {
var fiveMinutes = 59,
  display = document.querySelector('#time');
startTimer(fiveMinutes, display);
};