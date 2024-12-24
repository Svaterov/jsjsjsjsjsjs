function counting(number) {
    let count = 0;
    for (let n = number; n > 0; n = Math.floor(n / 10)) {
      count++;
    }
    return count;
  }
  