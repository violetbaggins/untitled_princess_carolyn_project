let cursor = document.getElementById('cursor');
let instrucciones = document.getElementById('instrucciones');

let easterEgg01 = document.getElementById('easterEgg01');
let easterEgg02 = document.getElementById('easterEgg02');
let easterEgg03 = document.getElementById('easterEgg03');
let easterEgg04 = document.getElementById('easterEgg04');

let xvalue = document.getElementById('xvalue');
let yvalue = document.getElementById('yvalue');

let totalWidth = window.innerWidth
let totalHeight = window.innerHeight

/* css */

let body = document.querySelector('body')


document.addEventListener('mousemove', function (e){
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x+10 + "px";
  cursor.style.top = y+10 + "px";
  xvalue.value = x;
  yvalue.value = y;


 
  let r = (x * 100 / totalWidth) * 0.01
  let b = Math.round(360 * r)

  body.style.backgroundImage =  `linear-gradient(to right, hsl(${b}, 100%, 71%) , hsl(${b-x}, 100%, 71%))`
  

  if( b > 10 && b < 25){
    instrucciones.style.display = "block"
    instrucciones.innerHTML = "<h1>Aca estan!!! </h1><ul><li>Dentro de la página hay 3 listas escondidas.</li><li>Cada una pertenece a una serie o saga.</li><li>El codigo para resolver este desafio es la primer letra del titulo de cada una de ellas</li><li>O sea, si la serie es South Park escribis la S.</li><li>Al final te van a quedar 3 letras.</li><li>Para que funcione las tenes que poner en orden alfabetico</li><li>Hint: capaz tambien es una marca 🤷‍♀️</li></ul>"
  } else {
    instrucciones.style.display = "none"
    instrucciones.innerHTML = ""
  }

  if( b > 300 && b < 330){
    easterEgg01.style.display = "block"
    easterEgg01.innerHTML = "<h1>Estas no son instrucciones</h1><ul><li>The Elder Wand</li><li>The Resurrection Stone</li><li>Cloak of Invisibility</li></ul>"
  } else {
    easterEgg01.style.display = "none"
    easterEgg01.innerHTML = ""
  }

  if( b > 150 && b < 170){
    easterEgg02.style.display = "block"
    easterEgg02.innerHTML ="<h1>Estas tampoco</h1><ul><li>Needle</li><li>Heartsbane</li><li>Longclaw</li><li>Widow's Wail</li><li>Oathkeeper</li><li>Lightbringer</li><li>Lion's Tooth</li></ul>"
  } else {
    easterEgg02.style.display = "none"
    easterEgg02.innerHTML = ""
  }

  if( b > 190 && b < 230){
    easterEgg03.style.display = "block"
    easterEgg03.innerHTML = "<h1>Ni siquiera son pistas estas</h1><ul><li>The View from Halfway Down</li><li>Free Churro</li><li>Time's Arrow</li><li>Fish Out Of Water</li><li>The Showstopper</li><li>That's Too Much, Man!</li><li>Nice While It Lasted</li></ul>"
  } else {
    easterEgg03.style.display = "none"
    easterEgg03.innerHTML = ""
  }

})

