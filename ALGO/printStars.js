const printStars = num => {
  
  for(let i = 0 ; i < num ; i++) {
    let stars = "*"
    for(let j = 0 ; j < i ; j++){
      stars += '*'
    }
    console.log(stars)
  }

}
//printStars(10)

const printBackwardsStars = num => {
  for(let i = num ; i >= 0 ; i--) {
    let stars = "*"
    for(let j = 0 ; j < i ; j++){
      stars += '*'
    }
    console.log(stars)
  }
}

//printBackwardsStars(10)

const printStarSeries = (num, times) => {
  for(let t = 0; t < times; t++){

    for(let i = 0 ; i < num ; i++) {
      let stars = "*"
      for(let j = 0 ; j < i ; j++){
        stars += '*'
      }
      console.log(stars)
    }
    for(let i = num ; i >= 0 ; i--) {
      let stars = "*"
      for(let j = 0 ; j < i ; j++){
        stars += '*'
      }
      console.log(stars)
    }

  }
}

printStarSeries(5, 3)