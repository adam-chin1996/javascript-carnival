// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

document.onkeydown = checkKey // accessing the built-in onkeydown function and assigning it the checkKey function

function checkKey(e) {
  // make a function to check the keypresses
  e = e || window.event

  console.log(e)
  if (e.keyCode == '39') {
    // right arrow key
    changeClownClothing(+1) // moving up a selection
  } else if (e.keyCode == '40') {
    // down arrow key
    changeBodyPart(+1) // moving down a selection
  } else if (e.keyCode == '37') {
    // left arrow key
    changeClownClothing(-1) // moving up a selection
  } else if (e.keyCode == '38') {
    // up arrow key
    changeBodyPart(-1) // moving down a selection
  }
}

// accessing the Id's in our document and assigning each a variable

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let bodySelection = [head, body, shoes] // make an array to store each individual body selection and the clothes associated with each part (refactored)
let strings = ['head', 'body', 'shoes'] // make an array of keywords to pull from when we call an index (refactored), which will refer to our bodySelection

let clothingIndex = 0 // declare a variable for our clothing index

let clownParts = [0, 0, 0] // make an array of clown parts to choose from [head, body, shoes]

// declare a function to allow us to access and change the position of our clown clothing, and also which body part to manipulate

function changeClownClothing(movement) {
  let position = clownParts[clothingIndex] // refactor variable and assign it to contain and access our clownPart index [0, 0, 0], which are equivalent to our head, body, and shoes selection
  let image = bodySelection[clothingIndex] // refactor variable and assign it to contain and access our stored images for each body part (head, body, shoes) within the array that we can rotate from
  let string = strings[clothingIndex] // refactor variable and assign it to contain a string of keywords that our clothingIndex can access which refer back to our bodySelection

  position += movement // declare the change in movement of our image on key press

  if (position < 0) position = 5 // make if statement to determine where our rotated image position is, and where to move to on key press with upper-most limit (refactored)

  if (position > 5) position = 0 // make if statement to determine where our rotated image position is, and where to move to on key press with lower-most limit (refactored)

  clownParts[clothingIndex] = position // refactor our variable, so we can access our previously newly declared variable in 'position = clownParts[clothingIndex]' which contains the index of our clothing parts

  // concatenate our strings to access our image files

  let imageSrc = './images/' // variable for image file path
  let stringSrc = string // variable to refer back to our strings array declared earlier to determine which body part and which clothing on that body part to rotate from
  let positionSrc = position // variable to refer to our matching [head, body, shoes] index
  let imageIdent = '.png' // variable to determine our image file source
  image.src = imageSrc.concat(stringSrc, positionSrc, imageIdent) // the concatenated image source location
}

// make a function to move up and down our clown body part selection (head,body, shoes)
function changeBodyPart(upDown) {
  clothingIndex += upDown // declare the change in movement of our body parts on key press

  if (clothingIndex < 0) clothingIndex = 2 // if statement to determine selected body position with upper-most limit

  if (clothingIndex > 2) clothingIndex = 0 // if statement to determine selected body position with lower-most limit
}
