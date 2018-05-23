
var numero1;
var funcion;


window.onload = function(){

  bar = document.getElementByClass("tecla");

  // assume that the bar should start at 50%
  bar.height = 150;
  }

function numero(numeroIngresado)
{

var texto = document.getElementById("display");
var numeroActual = texto.innerHTML;

if (isMaxCaracter(numeroActual))
{
  return;
}

//display.innerHTML(numero);
  if(!isNaN(parseInt(numeroIngresado)))
  {
      if(numeroActual == 0 && parseInt(numeroIngresado) == 0)
      {
        texto.innerHTML = numeroIngresado;
        return;
      }

      if(numeroActual == "0." && parseInt(numeroIngresado) > 0 )
      {
       texto.innerHTML += numeroIngresado;
       return;
      }

      if(numeroActual == "0" && parseInt(numeroIngresado) > 0 )
      {
       texto.innerHTML = numeroIngresado;
       return;
      }



      if(numeroActual != "0" )
      {
       texto.innerHTML += numeroIngresado;
       return;
      }


    }
  if(numeroIngresado == "." && (numeroActual.indexOf('.') == -1))
  {
    texto.innerHTML += numeroIngresado;
    return;
  }


}

function isMaxCaracter(numeroActual){

if(numeroActual.length == 8)
  {
    return true;
  }
  return false;
}

function cambiarsigno(){

  var texto = document.getElementById("display");
  var numeroActual = texto.innerHTML;
  texto.innerHTML = numeroActual * -1

}
  function igual()
  {
    var texto = document.getElementById("display");
    var numeroActual = texto.innerHTML;

  if(funcion == "sumar")
  {
  texto.innerHTML = parseFloat(numero1) + parseFloat(numeroActual);
  }
  if(funcion == "restar")
  {
  texto.innerHTML = parseFloat(numero1) - parseFloat(numeroActual);
  }
  if(funcion == "multiplicar")
  {
  texto.innerHTML = parseFloat(numero1) * parseFloat(numeroActual);
  }
  if(funcion == "dividir")
  {
  texto.innerHTML = parseFloat(numero1) / parseFloat(numeroActual);
  }
  }

function sumar()
{
  var texto = document.getElementById("display");
  var numeroActual = texto.innerHTML;
  numero1 = numeroActual;
  funcion = "sumar";
  texto.innerHTML = "";
}

function restar()
{
  var texto = document.getElementById("display");
  var numeroActual = texto.innerHTML;
  numero1 = numeroActual;
  funcion = "restar";
  texto.innerHTML = "";
}
function multiplicar()
{
  var texto = document.getElementById("display");
  var numeroActual = texto.innerHTML;
  numero1 = numeroActual;
  funcion = "multiplicar";
  texto.innerHTML = "";
}
function dividir()
{
  var texto = document.getElementById("display");
  var numeroActual = texto.innerHTML;
  numero1 = numeroActual;
  funcion = "dividir";
  texto.innerHTML = "";
}
function limpiar()
{
document.getElementById("display").innerHTML = 0;

}
