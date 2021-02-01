console.log('Hello frontend')
// Global Variables Here

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

////////////////////////////////
// Functions For Game Logic Here

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

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', function (c) {
    const XorY = c.target.classList[1]

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

////////////////////////////////
