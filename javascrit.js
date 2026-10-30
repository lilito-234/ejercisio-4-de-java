let contador = 0;

let botonSumar = document.getElementById("sumar")
let botonReiniciar = document.getElementById("reiniciar")
let Resultado = document.getElementById("contador")

botonSumar.addEventListener("click", function() {
    contador++;
    Resultado.textContent = contador;
});

botonReiniciar.addEventListener("click",function() {
    contador = 0;
    Resultado.textContent = contador;
});