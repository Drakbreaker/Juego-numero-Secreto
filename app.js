let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSoreados = [];
let numeroMaximo = 10;

function asignaTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   console.log(numeroDeUsuario === numeroSecreto);
   if (numeroDeUsuario === numeroSecreto){
    asignaTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    //el usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
        asignaTextoElemento('p', 'el numero secrero es menor');
    } else {
        asignaTextoElemento('p', 'el numero secrero es mayor');
    }
    intentos++;
    limpiarcaja();
   } 
   return;
}
// formula abreviada
function limpiarcaja() {
   document.querySelector('#valorUsuario').value = '';
}
//formula completa 
//function limpiarcaja() {
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSoreados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSoreados.length == numeroMaximo) {
        asignaTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    // si el numero generado esta incluido en la lista
    if (listaNumerosSoreados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
            listaNumerosSoreados.push(numeroGenerado);
            return numeroGenerado;
        }
     }
}

function condicionesIniciales() {
    asignaTextoElemento('h1', 'Juego del numero secreto!');
    asignaTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();