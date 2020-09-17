const kalenteri = document.getElementById('kalenteri');
for(var day = 1; day <= 31; day++)
{
  kalenteri.innerHTML = '<div class="paiva">' + day + '<div>';
}
