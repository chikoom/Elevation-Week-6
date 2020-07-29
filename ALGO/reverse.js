const reverse = function(str){
  
  let reversed = []
  str.split('').forEach(letter => reversed.unshift(letter))

  return reversed.join('')
}

const fasterReverse = function(str){
  
  let reversed = ''
  for(let i = str.length-1 ; i >=0 ; i--)
    reversed+=str.charAt(i)

  return reversed
}

console.log(fasterReverse("dog")) //should return "god"
console.log(fasterReverse("race car")) //should return "rac ecar"