let pageBtn = document.querySelector('.page__btn');

function addSymbol(num) {
  if (num.length < 2) {
    num = '0' + num;
    console.log(num);
  } else [console.log(num + ' Все ОК')];
}

function randomHex() {
  let hexAFrom = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));
  let hexBFrom = parseInt((255 * Math.random()).toFixed(0)).toString(16);
  let hexCFrom = parseInt((255 * Math.random()).toFixed(0)).toString(16);

  let hexFrom = hexAFrom + hexBFrom + hexCFrom;

  let hexATo = parseInt((255 * Math.random()).toFixed(0)).toString(16);
  let hexBTo = parseInt((255 * Math.random()).toFixed(0)).toString(16);
  let hexCTo = parseInt((255 * Math.random()).toFixed(0)).toString(16);

  let hexTo = hexATo + hexBTo + hexCTo;
  console.log(hexFrom + ', ' + hexTo);
}

pageBtn.addEventListener('click', randomHex);
