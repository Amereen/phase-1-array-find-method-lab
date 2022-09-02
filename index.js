// code your solution here
function superbowlWin(array){
  let newObject= array.find(object => object.result === "W")
  return (newObject ? newObject.year : undefined)
}