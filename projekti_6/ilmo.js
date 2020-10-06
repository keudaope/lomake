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
  {
    alert("Ole hyvä ja syötä kelvollinen etunimi");
    document.getElementById('etunimi').focus;
    return false;
  }
  if(sukunimi.length < 5)
  {
    alert("Ole hyvä ja syötä kelvollinen sukunimi");
    document.getElementById('sukunimi').focus;
    return false;
  }
  if(lahi.length < 10)
  {
    alert("Ole hyvä ja syötä kelvollinen lähiosoite");
    document.getElementById('lahiosoite').focus;
    return false;
  }
  if(pnro.length < 5)
  {
    alert("Ole hyvä ja syötä kelvollinen postinumero");
    document.getElementById('postinumero').focus;
    return false;
  }
  if(ptp.length < 5)
  {
    alert("Ole hyvä ja syötä kelvollinen postitoimipaikka");
    document.getElementById('postitoimipaikka').focus;
    return false;
  }
}
