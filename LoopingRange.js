function range(start, end, step) {
  let a = [];
  for (let i = 0; i <= ((end - start) / step); i++) {
    let num = start;
    a.push(num + step * i);
  }
  return a;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));