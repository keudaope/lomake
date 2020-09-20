var summa = "";

function syotto(luku){
summa += luku;
document.getElementById('vastausikkuna').innerHTML = summa;
}

function lisaaLuku(luku){
//summa += luku;
  syotto(luku);
}

function allClear(luku)
{
  document.getElementById('vastausikkuna').innerHTML = summa;
}

function clear()
{
  document.getElementById("vastausikkuna").innerHTML = "Paragraph changed.";
  pituus = luku.length();
  alert(pituus);
}
