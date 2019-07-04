function partitionExchangeSort (array, top, tail) {
  if (top >= tail) return
  let left = top
  let right = tail
  // 取数组中间元素作为标杆
  let mid = array[Math.floor((top + tail) / 2)]
  while (left < right) {
    // 从最左边找比标杆大的元素
    // 从最右边找比标杆小的元素
    // 然后交换
    while (array[right] > mid) right--
    while (array[left] < mid) left++
    if (left < right) {
      const temp = array[left]
      array[left] = array[right]
      array[right] = temp
      left++
      right--
    } else if (left === right) left++
  }

  // 至此，左边的元素都比标杆小，右边的元素逗比标杆大
  // 左右数组分而治之
  partitionExchangeSort(array, top, right)
  partitionExchangeSort(array, left, tail)
}

export function sort (array) {
  partitionExchangeSort(array, 0, array.length - 1)
  return array
}
