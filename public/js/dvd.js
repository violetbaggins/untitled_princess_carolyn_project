window.addEventListener('load', function () {

    let body = document.querySelector('body')
    let container = document.getElementsByClassName('container')
    
    let botonDeMierda = document.getElementById('malisimo');

    botonDeMierda.addEventListener('click', () =>{
    
        // mostrar div bluescreen
        body.innerHTML = `<!-- Hay enserio desactivaste todo porque no era "bonito"? No aprendiste nada de la Resbaladilla super diverida? --><!-- Como castigo, perdiste la oportunidad de resolver ese acertijo, y con ello 50 puntos --><!-- pero, pero, pero las apariencias engañan. No te gusto el front, pero te animaste a decirlo --><!-- y eso no es poco, por eso si visitas /melaaguanto te doy 100pts --><!-- Al final te salio bien. si hubieses recargado la pagina, no te enterabas de esto --><div id="bluescreen" class="bluescreen"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/1280px-DVD_logo.svg.png" width="200px" alt="" id="dvdimg"></div>`
        
        // <a href="/">Volve a empezar por discriminador de un front pedorro</a><button id="stop" class="malisimo">Para para para!!!</button>
        
    // agrega body-bluescreen al body
        body.classList.add("body-bluescreen")
    
    // movimiento dvdimg
        
        let bluescreen = document.getElementById("bluescreen")
        let btnStop = document.getElementById("stop")
        let dvdimg = document.getElementById("dvdimg")
            dvdimg.style.left = `-10px`
            dvdimg.style.top =  `-10px`

            console.log("Left:", dvdimg.style.left);
        let moveX = 10
        let moveY = 10

        console.log("Andando");  

        let intervalMove = setInterval(moveDVD, 100)

        function moveDVD() {
    
            dvdimg.style.left = parseInt(dvdimg.style.left) + moveX + 'px'
            dvdimg.style.top = parseInt(dvdimg.style.top) + moveY + 'px'

        //    si alcanza del ancho, cambiar la velocidad a -10????

        if (parseInt(dvdimg.style.top) >= window.innerHeight - 108){
            moveY = -10
            
        }

        if (parseInt(dvdimg.style.left) >= window.innerWidth - 210){
            moveX = -10
        }

        if (parseInt(dvdimg.style.top) <= 0){
            moveY = 10
        }

        if (parseInt(dvdimg.style.left) <= 0){
            moveX = 10
        }

            // console.log("left: ", dvdimg.style.left);
            // console.log("left: ", dvdimg.style.top);
        }

        /* btnStop.addEventListener('click', () => {
            clearInterval(intervalMove);
            bluescreen.innerHTML += `<a href="/">Volve a empezar por discriminador de un front pedorro</a>`
        }) */
        
        
    })

})

