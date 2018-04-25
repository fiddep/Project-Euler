let bigNumber = 600851475143;
// let bigNumber = 13195;
let size = Math.ceil(Math.sqrt(bigNumber));
let primes = [];

let divider = 2;
while (bigNumber > 1) {
  if (bigNumber % divider === 0) {
    bigNumber = bigNumber / divider;
    primes = [...primes, divider];
  }
  divider = divider + 1;
}

console.log(primes);
