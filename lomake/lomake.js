function tarkasta()
{
  // Haetaan lomakkeelta muuttujat:
    nimi = document.getElementById('nimi').value;
    salasana = document.getElementById('salasana').value;
    kayttaja = document.getElementsByName('pelaaja');
    mieli = document.getElementsByName('sivut');
    lempi = document.getElementsByName('lempiaine');
    lempiaine = lempi.options[lempi.selectedIndex].value;
    kehitys = document.getElementsByName('kehitys').value;

    // Tarkistetaan Nimi
    if(nimi.length == 0)
    {
      alert("Ole hyvä ja täytä nimi");
      return false;
    }

    // tarkastetaan Salasana
    if(salasana.length < 8)
    {
      alert("Anna vähintään 8 merkkiä pitkä salasana");
      return false;
    }

    // tarkastetaan radiobuttonit
    radiovalittu = false;
    for(var i = 0; i < kayttaja.length; i++)
    {
      if(kayttaja[i].checked == true)
      {
        radiovalittu = true;
      }
    }
    if(radiovalittu == false)
    {
      alert("Valitse, millainen koneenkäyttäjä olet");
      return false;
    }

    // tarkistetaan rastinappulat
    rastivalittu = false;
    for(var j = 0; j < mieli.length; j++)
    {
      if(mieli[j].checked == true)
      {
        rastivalittu = true;
      }
    }
    if(rastivalittu == false)
    {
      alert("Valitse mielipiteesi sivustani");
      return false;
    }

    // Tarkistetaan pudotusvalikko
    alert(lempiaine);
    if(lempiaine == '')
    {
      alert("Valitse lempiaineesi Keudassa");
      return false;
    }

}
