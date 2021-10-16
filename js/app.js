console.log('Hello frontend')
// Global Variables Here
let xScore = 0

<<<<<<< HEAD
let tieScore = 0

let oScore = 0

let turns = 9
=======
const reset = document.querySelector('.reset')
const cell = document.querySelectorAll('.cell')

let gameActive = true
let xIsCurrent = true
const gameState = [
  'cell-1',
  'cell-2',
  'cell-3',
  'cell-4',
  'cell-5',
  'cell-6',
  'cell-7',
  'cell-8',
  'cell-9'
]

let winner = null

const winCombos = [
  [0, 1, 2], // winning rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // winning columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], //winning diagonals
  [2, 4, 6]
]

const playerX = 'x'
const playerO = 'o'
>>>>>>> c2b4819ed4493f208395512b823fcbfd3b0bdcbb

const btn = document.querySelector('.btn')

const restart = false

const xDisplay = document.querySelector('.x-score')

const tieDisplay = document.querySelector('.tie-score')

const oDisplay = document.querySelector('.o-score')

const scoreDisplay = document.querySelector('.js-score')

const space = document.querySelectorAll('.space')

const displayPlayer = document.querySelector('.displayPlayer')

<<<<<<< HEAD
const gameBoard = document.querySelector('.game-board')

const playerX = 'x'

const playerO = 'o'

let gameWin = false

let currentPlayer = playerX

let xIsCurrent = false

let gameActive = false

let gameState = ['', '', '', '', '', '', '', '', '']

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

////////////////////////////////
// Functions For Game Logic Here
=======
const playerWon = function () {
  if (char === 'x') {
    playerX
  } else {
    playerO
  }
}

const gameStatus = function () {
  const cell1 = cell[0].classList[2]
  const cell2 = cell[1].classList[2]
  const cell3 = cell[2].classList[2]
  const cell4 = cell[3].classList[2]
  const cell5 = cell[4].classList[2]
  const cell6 = cell[5].classList[2]
  const cell7 = cell[6].classList[2]
  const cell8 = cell[7].classList[2]
  const cell9 = cell[8].classList[2]

  if (cell1 && cell1 === cell2 && cell2 === cell3) {
    gameActive = false
  }
}
>>>>>>> c2b4819ed4493f208395512b823fcbfd3b0bdcbb

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', function (c) {
    const XorY = c.target.classList[1]

<<<<<<< HEAD
const logic = function () {
  gameActive = true
  gameWin = false
  displayPlayer.innerText = `${currentPlayer.charAt(0).toUpperCase()}'s turn`

  for (let i = 0; i < space.length; i++) {
    space[i].addEventListener('click', addLogic)
  }
  //space.forEach((cell) => cell.classList.add(currentPlayer))
}

const addLogic = (c) => {
  if (
    c.target.classList[4] === 'x' ||
    c.target.classList[4] === 'o' ||
    c.target.classList[3] === 'full'
  ) {
    return
  }

  let i = parseInt(c.target.id)
  console.log(i)

  //if ((xIsCurrent = true)) {
  //   c.target.classList.add(playerX)
  //   console.log(currentPlayer)
  //  } else if ((xIsCurrent = false)) {
  //   c.target.classList.add(playerO)
  //   console.log(currentPlayer)
  //   xIsCurrent = true
  //  currentPlayer = playerX
  //}

  if (!c.target.classList.add('full')) {
    c.target.classList.add(`${currentPlayer}`)
    gameState[0 + i] = `${currentPlayer}`
    c.target.classList.add('full')
    turns--
    console.log(turns)
    checkWin()
    return
  }
}

const removeLogic = () => {
  for (i = 0; i < space.length; i++) {
    space[i].removeEventListener('click', addLogic)
  }
}

const checkWin = () => {
  const xMove = gameState
    .map((spaces, index) => {
      if (spaces === 'x') return index
    })
    .filter((val) => val !== undefined)

  console.log('x :', xMove)

  const oMove = gameState
    .map((spaces, index) => {
      if (spaces === 'o') return index
    })
    .filter((val) => val !== undefined)
  console.log('o :', oMove)
  console.log(gameState)

  const switchPlayer = () => {
    if (currentPlayer === `${playerX}`) {
      currentPlayer = `${playerO}`
      displayPlayer.innerText = `${currentPlayer
        .charAt(0)
        .toUpperCase()}'s turn`
    } else {
      currentPlayer = `${playerX}`
      displayPlayer.innerText = `${currentPlayer
        .charAt(0)
        .toUpperCase()}'s turn`
    }
  }

  btn.addEventListener('click', function () {
    gameState = new Array(9).fill('')
    space.forEach((spaces) => {
      if (spaces.classList.value.includes('full')) {
        spaces.classList.remove('full')
        spaces.classList.remove('x')
        spaces.classList.remove('o')
      }
    })
    logic()
  })

  const isMatch = (array, target) => target.every((val) => array.includes(val))

  for (let i = 0; i < winningCombos.length; i++) {
    if (isMatch(xMove, winningCombos[i])) {
      console.log('X Wins')
      displayPlayer.innerText = `${currentPlayer.charAt(0).toUpperCase()} Wins!`
      xScore++
      xDisplay.innerHTML = xScore
      gameActive = false
      gameWin = true
      console.log(gameActive)
      currentPlayer = `${playerO}`
    }

    if (isMatch(oMove, winningCombos[i])) {
      console.log('O Wins')
      displayPlayer.innerText = `${currentPlayer.charAt(0).toUpperCase()} Wins!`
      oScore++
      oDisplay.innerHTML = oScore
      gameWin = true
      gameActive = false
      currentPlayer = `${playerX}`
    }
  }
  if (
    (xMove.length === 5 && gameWin === false) ||
    (oMove.length === 5 && gameWin === false)
  ) {
    console.log('tie game')
    tieScore++
    tieDisplay.innerHTML = tieScore
    displayPlayer.innerText = `Tie Game!`
    gameActive = false
    gameWin = false
  }

  if (gameActive) {
    switchPlayer()
  } else {
    removeLogic()
  }
}

logic()
=======
    if (c.target.classList[2] === 'x' || c.target.classList[2] === 'o') {
      return
    }

    if (xIsCurrent) {
      c.target.classList.add('x')
      xIsCurrent = !xIsCurrent
    } else {
      c.target.classList.add('o')
      xIsCurrent = !xIsCurrent
    }
  })
}

reset.addEventListener('click', function (r) {
  console.log(r)
})
>>>>>>> c2b4819ed4493f208395512b823fcbfd3b0bdcbb

////////////////////////////////
