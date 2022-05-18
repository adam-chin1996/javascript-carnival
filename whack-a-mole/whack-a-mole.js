// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let holes = document.getElementsByTagName('TD')

for (let i = 0; i < holes.length; i++) {
  holes[i].onclick = holesClicked
}

function holesClicked() {}
console.log(holes)
