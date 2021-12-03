function sort(arr){
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const num = arr[i];
    while(j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1] = num;
  }
  return arr;
}
console.log(sort([5,7,8,10,4,1]));