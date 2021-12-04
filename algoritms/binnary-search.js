const findIndex = function(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while(left <= right){
    mid = Math.round((right - left) / 2) + left;
    if (arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      left = mid + 1
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(findIndex([-1, 2, 4, 11, 28, 29, 30], 28))