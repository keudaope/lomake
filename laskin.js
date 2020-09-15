var numero = '';
var tulos = 0;
var luku = '';
var taulu = ['+','-','*','/','%'];
var index = 0;
function lisaa(luku)
{
  numero+= luku;
  document.getElementById('tulos').innerHTML = numero;
}

function laske()
{
  document.getElementById('tulos').innerHTML = eval(numero);
}
function tyhjenna()
{
  numero = '';
  document.getElementById('tulos').innerHTML = numero;
}

function poistaViimeisin()
{
  for(var i = 0; i < numero.length; i++)
  {
    for(var j = 0; j < taulu.length; j++)
    {
      if(numero[i] == taulu[j])
      {
        index = i;
      }
    }
  }
  numero = numero.substr(0, index);
  document.getElementById('tulos').innerHTML = numero;
}
