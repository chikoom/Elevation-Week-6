const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20
}

const getLetter = (letterDist) => {
  const lettersArray = []
  for (const [key, value] of Object.entries(letterDist)) {
    for(let i = 0 ; i < Math.floor(value/10) ; i++)
      lettersArray.push(key)
  }
  return(lettersArray[Math.floor(Math.random() * lettersArray.length)])
}

console.log(getLetter(rawDist))