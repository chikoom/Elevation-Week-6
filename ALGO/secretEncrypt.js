/*
Write a better cipher function called secretEncrypt

Instead of encrypting by shifting one letter to the right, use a secret.
For example, let's say the word to encrypt is elephant, and the secret is cab 

The result of secretEncrypt("elephant", "cab") would be hmgsicqu


Instead of shifting each letter one to the right, we're always shifting by the next letter in cab:

At first we shift the first E by c, i.e 3 letters (c is the third letter in the alphabet, the first letter of cab)
Next we shift the L by 1 letter (a is the first letter in the alphabet, second letter of cab)
Next we shift the second E by 2 (b is the second letter in the alphabet, third letter of cab)
Next we shift the P by 3 again, because we're back at c in our secret
And so on
*/

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const lettersObj = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25}

const betterCrypt = (word, secret) => {

  secretPointer = 0
  encryptedWord = ""
  for(let i = 0 ; i < word.length ; i++){
    
    let currentLetter = word.charAt(i)
    let currentLetterPosition = lettersObj[currentLetter]
    let numberOfSteps = lettersObj[secret.charAt(secretPointer)]+1

    let newLetterPosition = currentLetterPosition+numberOfSteps
    let offset = letters.length - numberOfSteps - currentLetterPosition
    if(offset < 0) 
      newLetterPosition = offset * -1

    encryptedWord += letters[newLetterPosition]
    if(secretPointer === secret.length-1)
      secretPointer = 0
    else
      ++secretPointer
  }
  return encryptedWord
}
console.log(betterCrypt("elephant", "cab")) //would be hmgsicqu


const betterDecrypt = (word, secret) => {

  secretPointer = 0
  decryptedWord = ""
  for(let i = 0 ; i < word.length ; i++){
    
    let currentLetter = word.charAt(i)
    console.log(`Current letter: ${currentLetter}`)
    let currentLetterPosition = lettersObj[currentLetter]
    console.log(`Current letter position: ${currentLetterPosition}`)
    let numberOfSteps = lettersObj[secret.charAt(secretPointer)]+1
    console.log(`Number of steps: ${numberOfSteps}`)

    let newLetterPosition = currentLetterPosition-numberOfSteps
    console.log(`New letter position: ${newLetterPosition}`)
    let offset = currentLetterPosition-numberOfSteps
    if(newLetterPosition < 0) 
      newLetterPosition = letters.length-(newLetterPosition*-1)
    console.log(`New letter positioner: ${newLetterPosition}`)
      decryptedWord += letters[newLetterPosition]
    if(secretPointer === secret.length-1)
      secretPointer = 0
    else
      ++secretPointer
  }
  return decryptedWord
}

console.log(betterDecrypt("hmgsicqu", "cab")) 
