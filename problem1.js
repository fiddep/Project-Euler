let array = new Array(1000);

let counter = 3;
while (counter < 1000) {
  array[counter] = true;
  counter += 3;
}

counter = 5;
while (counter < 1000) {
  array[counter] = true;
  counter += 5;
}

let result = array.reduce((total, bool, index) => total + index, 0);

console.log(result);
