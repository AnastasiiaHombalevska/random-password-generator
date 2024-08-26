const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  const inputSymbols = document.getElementById('symbols');
  const inputNumbers = document.getElementById('numbers');
  const inputLength = document.getElementById('passwordLength');

let digits = false;
let symbols = false;
let PASSWORD_LENGTH = 8;

inputSymbols.addEventListener('change', (e) => {
  symbols = e.target.checked;
});

inputNumbers.addEventListener('change', (e) => {
  digits = e.target.checked;
});

inputLength.addEventListener('change', (e) => {
  PASSWORD_LENGTH = Number(e.target.value) || 8;
});

function generatePasswords() {
  let firstPassword = '';
  let secondPassword = '';
  const firstParol = document.getElementById('first-parol');
  const secondParol = document.getElementById('second-parol');

  let arrayWithChoosedElements;

  if (digits && symbols) {
    arrayWithChoosedElements = characters.filter(item => /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;"'<>,.?/\\|-]$/.test(item));
  } else if (digits) {
    arrayWithChoosedElements = characters.filter(item => /^[a-zA-Z0-9]$/.test(item));
  } else if (symbols) {
    arrayWithChoosedElements = characters.filter(item => /^[a-zA-Z!@#$%^&*()_+{}[\]:;"'<>,.?/\\|-]$/.test(item));
  } else {
    arrayWithChoosedElements = characters.filter(item => /^[a-zA-Z]$/.test(item));
  }

  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    firstPassword += arrayWithChoosedElements[getRandomChar(arrayWithChoosedElements)];
    secondPassword += arrayWithChoosedElements[getRandomChar(arrayWithChoosedElements)];
  }

  firstParol.textContent = firstPassword;
  secondParol.textContent = secondPassword;
}


function getRandomChar(arr) {
  return Math.floor(Math.random() * arr.length);
}
