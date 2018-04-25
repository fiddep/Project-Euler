let array = [];

let number1 = 1;
let number2 = 2;

let stop = 4000000;
while (number2 < stop) {
  let even = number2 % 2;
  if (even === 0) {
    array = [...array, number2];
  }
  let sum = number1 + number2;
  number1 = number2;
  number2 = sum;
}

let sum = array.reduce((total, number) => total + number, 0);

console.log(sum);
