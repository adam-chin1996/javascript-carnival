// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorn = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = inflate
}

let unicornArray = ['Unicorn1', 'Unicorn2', 'Unicorn3']

function inflate(e) {
  let unicornImage = e.target
  if (unicornImage.src.match('./images/unicorn-0.png')) {
    unicornImage.src = './images/unicorn-1.png'
  } else if (unicornImage.src.match('./images/unicorn-1.png')) {
    unicornImage.src = './images/unicorn-2.png'
  } else if (unicornImage.src.match('./images/unicorn-2.png')) {
    unicornImage.src = './images/unicorn-3.png'
  } else if (unicornImage.src.match('./images/unicorn-3.png')) {
    alert(unicornImage.id + ' says Thank You!')
  }
}
console.log(unicorn)

console.log(unicornArray)
