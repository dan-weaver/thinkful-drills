function reduce(acc, list, reducer) {
  let lastVal = acc;
  for (const item of list) {
    lastVal = reducer(lastVal, item);
  }
  return lastVal;
}

// write a recursive version here
