
const findDistance = (point1, point2) => {
  let deltaX = Math.abs(point1[0]-point2[0])
  let deltaY = Math.abs(point1[1]-point2[1])
  let distance = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2))
  return distance
}

let pizzaLocations = [
  { x: 6, y: 12 },
  { x: 3, y: 1 },
  { x: 9, y: 0 },
  { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }

const findClosest = (locations, point) => {
  let closest = {}
  let distance = findDistance([locations[0].x, locations[0].y],[point.x,point.y])
  for(let location of locations){
    let dist = findDistance([location.x, location.y],[point.x,point.y])
      if(dist < distance){
        closest = location
        distance = dist
      }
  }
  return closest
}

console.log(findClosest(pizzaLocations, homeLocation)) // should return {x: 3, y: 1}

//console.log(findDistance([3,4],[6,8]))
