function filter(arr, fn) {
    let newArray = [];
    for (const item of arr) {
      if (fn(item)) newArray.push(item);
    }
    return newArray;
  }


  // write a recursive version here