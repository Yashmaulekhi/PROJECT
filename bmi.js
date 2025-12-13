const form = document.querySelector('form')
const results = document.querySelector('#results')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please give a valid height"
    return
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please give a valid weight"
    return
  }
else{
  results.innerHTML = (weight/(height*height)).toFixed(2)}
})
