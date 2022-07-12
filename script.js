let page = document.querySelector('.page');
let pageBtn = document.querySelector('.page__btn');

let hexAFrom;
let hexBFrom;
let hexCFrom;
let hexATo;
let hexBTo;
let hexCTo;
let hexFrom;
let hexTo;

function addSymbol(num) {
  if (num.length < 2) {
    num = '0' + num;
  }

  return num;
}

function randomHex() {
  hexAFrom = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));
  hexBFrom = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));
  hexCFrom = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));

  hexATo = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));
  hexBTo = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));
  hexCTo = addSymbol(parseInt((255 * Math.random()).toFixed(0)).toString(16));

  hexFrom = hexAFrom + hexBFrom + hexCFrom;
  hexTo = hexATo + hexBTo + hexCTo;
}

function backgroundSwitch() {
  page.style.background = `linear-gradient(135deg, #${hexFrom}, #${hexTo}`;
}

function start() {
  randomHex();
  backgroundSwitch(hexFrom, hexTo);
}

pageBtn.addEventListener('click', start);
