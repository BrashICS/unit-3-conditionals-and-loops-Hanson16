let sum = 0, num = 0;

do {

    // add all positive numbers
    sum += num;

    // take input from the user
    num = parseInt(prompt("Enter a number: "));

    // loop terminates if num is negative
} while (num >= 0);

// last, display sum
console.log(`The sum is ${sum}`);

function play() {
  var dice = -1;
  var rolls = 1;
  var numb1 = 2;
  var numb2 = 3;
  var numb3 = 6;
  var numb4 = 12;
  while (![numb1, numb2, numb3, numb4].includes(dice)) {
    dice = Math.floor(Math.random() * 11) + 2;
    rolls++;

  }

  document.getElementById('results').innerHTML = 'Your dice landed on: ' + dice;
  document.getElementById('rolls').innerHTML = 'Rolls: ' + rolls;

}

play()