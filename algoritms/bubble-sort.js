const sort = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j +1] = arr[j];
        arr[j] = temp
      }
    }
  }
  return arr;
}

console.log(sort([5,7,8,10,4,1]));