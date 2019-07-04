function partitionExchangeSort (array, top, tail) {
  if (top >= tail) return
  let left = top
  let right = tail
  // 以最左边作为标杆
  let temp = array[left]
  while (left < right) {
    while (left < right && array[right] >= temp) right--
    array[left] = array[right]
    while (left < right && array[left] < temp) left++
    array[right] = array[left]
  }
  if (left === right) array[left] = temp
  if (left !== top) partitionExchangeSort(array, 0, left - 1)
  if (right !== tail) partitionExchangeSort(array, right + 1, array.length - 1)
}

export function sort (array) {
  partitionExchangeSort(array, 0, array.length - 1)
  return array
}
