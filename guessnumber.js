let randomnumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numguess = 1
let playGame = true

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = parseInt(userinput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number')
  } else {
    prevguess.push(guess)
    if (numguess === 11) {
      displayguess(guess)
      displaymessage(`Game Over! Number was ${randomnumber}`)
      endgame()
    } else {
      displayguess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displaymessage('🎉 You guessed it right!')
    endgame()
  } else if (guess < randomnumber) {
    displaymessage('📉 Too Low')
  } else {
    displaymessage('📈 Too High')
  }
}

function displayguess(guess) {
  userinput.value = ''
  guessSlot.innerHTML += `${guess} `
  numguess++
  remaining.innerHTML = `${11 - numguess}`
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame() {
  userinput.value = ''
  userinput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newgame()
}

function newgame() {
  const newGameButton = document.querySelector('#newgame')
  newGameButton.addEventListener('click', function () {
    randomnumber = parseInt(Math.random() * 100 + 1)
    prevguess = []
    numguess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = '10'
    loworhi.innerHTML = ''
    userinput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
