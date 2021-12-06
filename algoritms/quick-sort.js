let arr = [33, 4 , 28, 4, 9, 0, 55, 10, 1]
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const firstNum = arr[0];
  const lastNum = arr[arr.length - 1]
  const index = Math.floor(Math.random() * arr.length);
  const currentItem = arr[index];

  const more = [];
  const less = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      continue;
    }
    if (arr[i] < currentItem) {
      less.push(arr[i])
    } else {
      more.push(arr[i])
    }
  }
  return [
    ...quickSort(less),
    currentItem,
    ...quickSort(more)
  ]
}
console.log(quickSort(arr));
