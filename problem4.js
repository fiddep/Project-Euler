const checkPalindrom = (number1, number2) => {
  let sum = number1 * number2 + "";
  let reversed = sum
    .split("")
    .reverse()
    .join("");

  if (sum === reversed) {
    return true;
  } else {
    return false;
  }
};

let found1 = 0;
let found2 = 0;
let start = Date.now();
for (let c1 = 999; c1 > 1; c1--) {
  for (let c2 = 999; c2 > 1; c2--) {
    if (checkPalindrom(c1, c2)) {
      if (c1 * c2 > found1 * found2) {
        found1 = c1;
        found2 = c2;
        c2 = 0;
      }
    }
    if (found1 < found2) {
      c1 = 0;
      c2 = 0;
    }
  }
}
let end = Date.now();

console.log(found1, found2);
console.log(end - start);
