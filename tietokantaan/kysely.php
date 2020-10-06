<?php
// Otetaan yhteys tietokantaan
$palvelin = "fdb28.awardspace.net";
$kayttaja = "3596116_keuda";
$salasana = "O3kk1nks...";
$tietokanta = "3596116_keuda";

// Haetaan lomakkeelta muuttujat
$enimi = $_GET["etunimi"];
$snimi = $_GET["sukunimi"];
$losoite = $_GET["lahiosoite"];
$pnro = $_GET["postinumero"];
$ptp = $_GET["postitoimipaikka"];



// Yhdistetään palvelimelle
$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

// Mikäli yhteys ei toimi, annetaan virheviesti
if(mysqli_connect_error()){

	die("Tietokantaan ei saatu yhteyttä");

	}

  $talletus = "INSERT INTO Osoite (Etunimi, Sukunimi, Lahiosoite, Postinumero, Postitoimipaikka) VALUES ('$enimi','$snimi','$losoite','$pnro','$ptp')";

  if (mysqli_query($link, $talletus))
	{
      echo "Uudet tiedostot paivitetty";
	}
	else
	{
      echo "Virhe: " . $talletus . "<br>" . mysqli_error($link);
	}
//mysqli_close($link);

	$kysely = "SELECT * FROM Osoite";
	$vastaus = mysqli_query($link, $kysely);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Tiedon haku tietokannasta</title>
		<link rel="stylesheet" href="kysely.css">
	</head>
	<body>
		<table border="1">
			<tr>
				<th colspan="6"><h2>Käyttäjät</h2></th>
			</tr>
			<tr>
				<th>Etunimi</th>
				<th>Sukunimi</th>
				<th>Lähiosoite</th>
				<th>Postinumero</th>
				<th>Postitoimipaikka</th>
			</tr>
			<?php
			while($rivit=mysqli_fetch_assoc($vastaus))
			{
			?>
				<tr>
					<td><input type="text" name="" value="<?php echo $rivit['Etunimi'] ?>"></td>
					<td><input type="text" name="" value="<?php echo $rivit['Sukunimi'] ?>"></td>
					<td><input type="text" name="" value="<?php echo $rivit['Lahiosoite'] ?>"></td>
					<td><input type="text" name="" value="<?php echo $rivit['Postinumero'] ?>"></td>
					<td><input type="text" name="" value="<?php echo $rivit['Postitoimipaikka'] ?>"></td>
				</tr>
			<?php
			}
			?>
		</table>
	</body>

<?php
mysqli_close($link);
?>
