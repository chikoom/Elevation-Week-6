

const isPalindrom = str => {
  let saniString = str.replace(' ','').toLowerCase()
  let saniReverse = saniString.split('').reverse().join('').toLowerCase()
  for(let i = 0; i < saniReverse.length ; i++)
    if(saniString.charAt(i) !== saniReverse.charAt(i)) return false
  return true
}

console.log(isPalindrom('Taco Cat'))