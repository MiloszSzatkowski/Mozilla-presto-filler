/*
 * To jest brudnopis JavaScriptu.
 *
 * Wprowadź kod JavaScript, następnie kliknij prawym przyciskiem lub wybierz z menu Wykonaj:
 * 1. Uruchom – by wyliczyć zaznaczone wyrażenie (Ctrl+R)
 * 2. Zbadaj – by wyświetlić wynik w Inspektorze obiektów (Ctrl+I)
 * 3. Wyświetl – by wstawić wynik w komentarzu za zaznaczeniem. (Ctrl+L)
 */

var arr, diff;

//get all values tables
var arr = document.getElementsByClassName('BoxComplexSet');
var arr_size = [];
for (let i = 2; i < arr.length; i++) {
  if (arr[i].id == 'KontrFileBoxComplexSet') {
    arr_size.push(arr[i])
  }
}

//get all gfx tables
var ar_gfx = document.querySelectorAll("#gfxFileTable");
var ar_gfx_full = [];
var counter = 0; // - counter to int (i) - for testing only
for (let i = 0; i < ar_gfx.length; i++) {
  for (let j = 0; j < ar_gfx[i].childNodes[0].childNodes[1].childNodes.length; j++) {
    if (ar_gfx[i].childNodes[0].childNodes[1].childNodes[j].id != undefined) {
      if (ar_gfx[i].childNodes[0].childNodes[1].childNodes[j].id.indexOf('gfxFileRow') == 0) {
        ar_gfx_full.push({
          parentOfIt: ar_gfx[i],
          childOfIt: ar_gfx[i].childNodes[0].childNodes[1].childNodes[j],
          ind: i
        });
      }
    }
  }
}

for (let i = 0; i < arr_size.length; i++) {

  var width = parseFloat(arr_size[i].childNodes[arr_size[i].childNodes.length - 1].childNodes[0].childNodes[3].innerHTML.split('m')[0]);
  var height = parseFloat(arr_size[i].childNodes[arr_size[i].childNodes.length - 1].childNodes[0].childNodes[5].innerHTML.split('m')[0]);
  var amount = parseFloat(arr_size[i].childNodes[arr_size[i].childNodes.length - 1].childNodes[0].childNodes[9].innerHTML.split('m')[0]);

  for (let k = 0; k < ar_gfx_full.length; k++) {
    if (i == ar_gfx_full[k].ind) {
      ar_gfx_full[k].childOfIt.childNodes[3].childNodes[1].value = width;
      ar_gfx_full[k].childOfIt.childNodes[5].childNodes[1].value = height;
      ar_gfx_full[k].childOfIt.childNodes[9].childNodes[0].value = amount;
    }
  }

}
