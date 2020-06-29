function random_rgb(){
    var random_red = Math.floor(Math.random()*255);
    var random_green = Math.floor(Math.random()*255);
    var random_blue = Math.floor(Math.random()*255);
    return "rgb("+random_red+","+random_green+","+random_blue+")"; 
}


function mudacor(){
    var codigoRgb = document.getElementById("CodigoRgb");
    var bloco = document.getElementById("cor");
    bloco.style.backgroundColor = random_rgb();
    codigoRgb.innerText = "Código: "+bloco.style.backgroundColor;
  }

  
const titulo = document.getElementById('titulo');
const texto = titulo.textContent;
console.log

function digitar(titulo) {
    const textoArray = titulo.innerHTML.split("");
    titulo.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() { titulo.innerHTML += letra;}, 75 * i)
    });
}

digitar(titulo);