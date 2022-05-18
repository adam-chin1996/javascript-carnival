// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// declare a variable for the table of cells
let holes = document.getElementsByTagName('TD')

// declare a variable to determine random position within our table of cells defined above
let randomIndex = Math.floor(Math.random() * holes.length)

// declare a variable to get our table document and also choose a random position in that table of cells
let randomHole = holes[randomIndex]

// create a mole image in our document table
let mole = document.createElement('img')

// access the mole image in our files
mole.src = './mole.PNG'

// give our mole an id to reference back in the css file
mole.id = 'mole'

// place our mole inside a random cell within the table
randomHole.appendChild(mole)

// make an onclick function to whack the mole
mole.onclick = molesWhacked

// declare a function to change position of the moles after the onclick has occured
function molesWhacked(e) {
  randomIndex = Math.floor(Math.random() * holes.length) // randomises another position of a cell inside the table
  randomHole = holes[randomIndex] // randomises another mole in another cell in the table
  randomHole.appendChild(mole) // places the mole within a random cell

  // delcare audio variable which links to audio file
  let audio = new Audio('./whack-audio.wav')
  audio.play() // play the audio that is linked
}
