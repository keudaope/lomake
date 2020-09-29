function tarkista()
{
  var muuttujat = [];
  muuttujat[0] = document.getElementById('nimi').value;
  muuttujat[1] = document.getElementById('salasana').value;
  muuttujat[2] = document.getElementById('lahiosoite').value;
  muuttujat[3] = document.getElementById('postinumero').value;
  muuttujat[4] = document.getElementById('postitoimipaikka').value;
  for(var n = 0; n < muuttujat.length; n++)
  {
    if(muuttujat[n] == '')
    {
      alert("Et ole täyttänyt kaikkia kenttiä");
      return false;
    }
  }
}
