function map(arr, fn) {
  let newArray = [];
  for (const item of arr) {
    newArray.push(fn(item));
  }
  return newArray;
}

// write a recursive version here
