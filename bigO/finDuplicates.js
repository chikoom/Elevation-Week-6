
const findDupliactes = arr => {
  let numbers = {}
  for(let number of arr) {
    if(numbers[number]) return `${number} is a duplicate`
    else numbers[number] = number
  }
  return 0
}

console.log(findDupliactes([1,2,3,4,5,6,4,5,6,7,8]))