const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

const PASSWORD_LENGTH = 8;

function generatePasswords() {
  let firstPassword = '';
  let secondPassword = '';
  const firstParol = document.getElementById('first-parol');
  const secondParol = document.getElementById('second-parol');

  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    firstPassword += characters[getRandomChar()];
    secondPassword += characters[getRandomChar()];
  }

  console.log(firstPassword);
  console.log(secondPassword);

  firstParol.textContent = firstPassword;
  secondParol.textContent = secondPassword;
}

function getRandomChar() {
  return Math.floor(Math.random() * characters.length);
}
