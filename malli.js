// Lomakkeen varsinainen tarkastus
function tarkasta(form)
{
  // Haetaan uudella tavalla tietoa lomakkeelta
  // jossa form-tulee yllä olevasta sulkujen sisältä
  // ja sen tilalla voi olla mikä tahansa (tässä form)
  // form.nimi - kohdan nimi tulee HTML-Lomakkeen
  // input-sarakkeen name-määritteestä ja lopuksi
  // valitaan arvo (.value), joka ko. kohdassa on
  var etunimi = form.enimi.value;
  var sukunimi = form.snimi.value;
  var sahkoposti = form.email.value;
  var pallukka = form.mainos; // HUOM! ei valueta
  var check = form.boksi; //HUOM! ei valueta

  // Tarkastus alkaa, ensin tekstiboksit:
  if(etunimi.length < 5)
  {
    alert("Anna vähintään 5-merkkinen etunimi");
    form.etunimi.focus(); // Siirtää kohdistimen etunimikenttään
    return false; // Hyvä ohjelmistokäytäntä, eli ei palauta mitään
  }
  if(sukunimi.length < 5)
  {
    alert("Anna vähintään 5-merkkinen sukunimi");
    form.sukunimi.focus(); // Siirtää kohdistimen sukuunimikenttään
    return false; // Hyvä ohjelmistokäytäntä, eli ei palauta mitään
  }
  // Tarkastetaan, löytyykö @-merkkiä
  if(sahkoposti.indexOf('@', 0) == false)
  {
    alert("Et antanut sähköpostiosoitettasi");
    form.sahkoposti.focus();
    return false;
  }

}

// Tyhjennetään lomake, jos siinä dataa
function tyhjenna(lomake)
{
  var clean = lomake.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
}
