// const cell = { val: '.', id: 1 }
const gameboard = []
for (let i = 1; i <= 9; i++) {
  gameboard.push({ val: '.', index: i })
}
console.log(gameboard)
const drawX = (id) => {
  gameboard.forEach((cell) => {
    if (cell.index == id && cellNotBusy(cell)) {
      cell.val = 'X'
    }
  })
}

const cellNotBusy = (cell) => cell.val === '.'

const drawO = (id) => {
  gameboard.forEach((cell) => {
    if (cell.index == id && cellNotBusy(cell)) {
      cell.val = 'O'
    }
  })
}

drawX(1)
drawO(2)

const draw = function (mark, id) {
  gameboard.forEach((cell) => {
    if (cell.index == id && cellNotBusy(cell)) {
      cell.val = mark
    }
  })
}

draw('X', 9)
draw('O', 8)

console.log(gameboard)
