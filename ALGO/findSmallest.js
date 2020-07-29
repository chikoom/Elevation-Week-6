let numbers1 = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

let numbers2 = [-312, -9123, -112, -812, -7411, -312] //should find -9123

let numbers3 = [23, 23, 23, 23, 23] //should find 23


const smallestNum = (arr) => {
  let smallest = arr[0]
  for (number of arr) {
    if (number < smallest) smallest = number
  }
  console.log (`The smallest number is ${smallest}`)
}

smallestNum(numbers1)
smallestNum(numbers2)
smallestNum(numbers3)