const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number to iterate: ", function(answer) {
  let a = parseInt(answer);

  while (a <= 10) {
    console.log("The number is " + a);
    a++;
  }

  rl.close();
});
