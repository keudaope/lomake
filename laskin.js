var numero = '';
function lisaa(luku)
{
  numero+= luku;
  document.getElementById('tulos').innerHTML = numero;
}

function laske()
{
  var laske = document.getElementById('tulos').value;
  document.getElementById('tulos').innerHTML = eval(numero);
}
function tyhjenna()
{
  numero = '';
  document.getElementById('tulos').innerHTML = numero;
}
