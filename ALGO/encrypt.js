const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const lettersObj = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25}

const encrypt = (word) => {
  let encryptedWord = ''
  for(let i = 0 ; i < word.length ; i++){
    let letterIndex = lettersObj[word.charAt(i)]+1
    if (letterIndex === letters.length)
      letterIndex = 0
    let newLetter = letters[letterIndex]
    encryptedWord += newLetter
  }
  console.log(encryptedWord)
}

encrypt('cat')
encrypt('buz')


const decrypt = (word) => {
  let decryptedWord = ''

  for(let i = 0 ; i < word.length ; i++){
    let letterIndex = lettersObj[word.charAt(i)]-1
    if (letterIndex === -1)
      letterIndex = letters.length-1
    let newLetter = letters[letterIndex]
    decryptedWord += newLetter
  }

  console.log(decryptedWord)
}

decrypt('dbu')
decrypt('cva')