
const printInLoop = (arr) => {
  for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i])
    if(i === arr.length-1)
      i = -1
  }
}

printInLoop(["down", "the", "rabbit", "hole"])