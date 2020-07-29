const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = []
    let firstLength = arr1.length
    let secondLength = arr2.length
    let arrays = []
    if(firstLength > secondLength){
      arrays.push(arr1)
      arrays.push(arr2)
    }
    else{
      arrays.push(arr2)
      arrays.push(arr1)
    }

    while(arrays[0].length > 0){
      let randomIndex1 = randomNumber(arrays[0].length)
      let randomIndex2 = randomNumber(arrays[1].length)
      if(arrays[0][randomIndex1]){
        jumbledArr.push(arrays[0][randomIndex1])
        arrays[0].splice(randomIndex1,1)
      }
      if(arrays[1][randomIndex2]){
        jumbledArr.push(arrays[1][randomIndex2])
        arrays[1].splice(randomIndex2,1)
      }
    }

    return jumbledArr
}

const randomNumber = (limit) =>{
  return Math.floor(Math.random() * limit); 
}

console.log(jumble(colors, foods)) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]