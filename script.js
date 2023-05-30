
var btnEncriptar = document.querySelector("#btnEnc");
var btnDesencriptar = document.querySelector("#btnDesnc")
var btnCopy = document.querySelector(".btnCopy")
//var imgBuscador = document.querySelector(".imgbuscador")
//var minimensaje = document.querySelector(".minimensaje")


function  encriptar (){
  var entradaTexto = document.querySelector("#entradaTexto")
  console.log(entradaTexto.value)
  var nuevoResult = entradaTexto.value
  var nuevoResult =  nuevoResult.replace(/e/img,"enter");
  var nuevoResult =  nuevoResult.replace(/i/img,"imes");
  var nuevoResult =  nuevoResult.replace(/a/img,"ai");
  var nuevoResult =  nuevoResult.replace(/o/img,"ober");
  var nuevoResult =  nuevoResult.replace(/u/img,"ufat");
  console.log(nuevoResult)
  document.querySelector(".resultado").innerHTML = nuevoResult;
  document.querySelector(".noEncontrado").innerHTML = "";
}

function  desencriptar (){
  var entradaTexto = document.querySelector("#entradaTexto")
  console.log(entradaTexto.value)
  var nuevoResult = entradaTexto.value
  var nuevoResult =  nuevoResult.replace(/enter/img,"e");
  var nuevoResult =  nuevoResult.replace(/imes/img,"i");
  var nuevoResult =  nuevoResult.replace(/ai/img,"a");
  var nuevoResult =  nuevoResult.replace(/ober/img,"o");
  var nuevoResult =  nuevoResult.replace(/ufat/img,"u");
  console.log(nuevoResult)
  document.querySelector(".resultado").innerHTML = nuevoResult;
  document.querySelector(".noEncontrado").innerHTML = "";
}

function copiarText () {
  var resultado = document.querySelector(".resultado")
  console.log (resultado.textContent)
  var copia = resultado.textContent
  navigator.clipboard.writeText(copia)
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopy.onclick = copiarText;