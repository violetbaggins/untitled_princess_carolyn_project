window.addEventListener('load', function () {

    let btnRomper = document.getElementById("btn-romper")
    let container = document.querySelector(".container")
    let body = document.querySelector("body")
    

    btnRomper.addEventListener('click', () => {
      container.classList.add("romper")
      /* container.innerHTML += "<h1>Pillin, pillin. Ves lo que pasa cuando rompes!!! espera unos segundos mas y vas a ver: homero simpson</h1>" */

      if (container.classList.contains("romper")){

        setTimeout(() => {

          body.classList.add("backwards")

        }, 2000)
      }

    })

})