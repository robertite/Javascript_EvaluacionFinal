function numero(numeroIngresado)
{

var texto = document.getElementById("display");
var numeroActual = texto.innerHTML;

//display.innerHTML(numero);
  if(!isNaN(parseInt(numeroIngresado)))
  {
      if(parseInt(numeroActual) == 0 && parseInt(numeroIngresado) == 0)
      {
        texto.innerHTML = numeroIngresado;
        return;
      }

      if(parseInt(numeroActual) == 0 && parseInt(numeroIngresado) != 0 )
      {
       texto.innerHTML = numeroIngresado;
       return;
      }

      if(parseInt(numeroActual) != 0 )
      {
       texto.innerHTML += numeroIngresado;
       return;
      }

    }
    if(numeroIngresado == "." && !isNaN(parseInt(numeroActual)))
    {
      texto.innerHTML += numeroIngresado;
      return;
    }

}

function limpiar()
{
document.getElementById("display").innerHTML = 0;

}
