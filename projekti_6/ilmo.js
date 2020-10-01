function chekkaa()
{
  // Haetaan muuttujat taulukosta
  var etunimi = document.getElementById('etunimi').value;
  var sukunimi = document.getElementById('sukunimi').value;
  var lahi = document.getElementById('lahiosoite').value;
  var pnro = document.getElementById('postinumero').value;
  var email = document.getElementById('sahkoposti').value;
  var ptp = document.getElementById('postitoimipaikka').value;
  var puh = document.getElementById('sukunimi').value;
  var tantaja = document.getElementById('sukunimi').value;
  var titteli = document.getElementById('sukunimi').value;
  var saika = document.getElementById('sukunimi').value;
  var osallistun = document.getElementById('sukunimi');
  var rvalio = document.getElementById('sukunimi');

  // Tarkistetaan etunimi
  if(etunimi.length < 3)
  alert(etunimi);
  {
    alert("Ole hyvä ja syötä etunimi");
    document.getElementById('etunimi').focus;
    return false;
  }
}
