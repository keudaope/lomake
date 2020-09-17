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
  // var etunimi = document.getElementsByName('enimi').value;
  var sukunimi = form.snimi.value;
  var sahkoposti = form.email.value;
  var palaute = form.palaute.value;
  var pallukka = form.mainos; // HUOM! ei valueta
  var check = form.boksi; //HUOM! ei valueta

  // Tarkastus alkaa, ensin tekstiboksit:
  if(etunimi.length < 5)
  {
    alert("Anna vähintään 5-merkkinen etunimi");
    form.enimi.focus(); // Siirtää kohdistimen etunimikenttään
    return false; // Hyvä ohjelmistokäytäntä, eli ei palauta mitään
  }
  if(sukunimi.length < 5)
  {
    alert("Anna vähintään 5-merkkinen sukunimi");
    form.snimi.focus(); // Siirtää kohdistimen sukuunimikenttään
    return false; // Hyvä ohjelmistokäytäntä, eli ei palauta mitään
  }
  // Tarkastetaan, löytyykö @-merkkiä
  var ehdot = /\S+@\S+/;
  if(!ehdot.test(sahkoposti))
  {
    alert("Anna kunnon sähköposti");
    form.email.focus();
    return false;
  }

  // Tarkastetaan textarea
  if(palaute.length < 20)
  {
    alert("Palautteessa pitää olla vähintään 20 merkkiä");
    form.palaute.focus();
    return false;
  }

  // Tarkastetaan radio-buttonit
  // Luodaan tosi/epätosi -muuttuja, joka asetetaan epätodeksi
  var vastaus = false;
  // luodaan sitä varten silmukka, joka käy läpi kaikki painikkeet
  for(var i = 0; i < pallukka.length; i++) // tässä siis mennään siihen saakka, kun pallukoita riittää
  {
    if(pallukka[i].checked == true)
    {
      vastaus = true;
    }
  }
  if(vastaus == false)
  {
    alert('Et ole valinnut haluatko mainoksia');
    return false;
  }

  // Tarkastetaan aivan samalla tavalla Checkboxit
  var checkvastaus = false;
  for(var j = 0; j < check.length; j++)
  {
    if(check[j].checked == true)
    {
      checkvastaus = true;
    }
  }
  if(checkvastaus == false)
  {
    alert("Et valinnut, mikä on kivaa");
    return false;
  }
  else {
    alert("Kiitos lomakkeen täytöstä");
    //return false;
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
