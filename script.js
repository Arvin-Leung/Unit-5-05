'use strict'

// This line will call the event for clicking the button and run the function
document.getElementById('length').addEventListener('click', area )

// This function will grab the length and call it X, then square it
function area () {
  let x = document.getElementById('area').value
  x = parseInt(x)
  x = x ** 2
  document.getElementById('result').innerHTML = "Your area is " + x
}
