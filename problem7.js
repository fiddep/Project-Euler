const primes = num => {
  let arr = Array.from({ length: num - 1 }, (x, i) => i + 2);
  let sqroot = Math.floor(Math.sqrt(num));

  let numsTillSqroot = Array.from({ length: sqroot - 1 }, (x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));

  return arr[10000];
};

console.log(primes(150000));
