let number = 1;
let stop = 20;
let calc = true;

while (calc) {
  for (let i = 1; i <= stop; i++) {
    if (number % i === 0) {
    } else {
      break;
    }
    if (i === stop) {
      console.log(number);
      calc = false;
      break;
    }
  }
  number += 1;
}
