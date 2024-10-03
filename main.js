const Gameboard = () => {
  const gameboard = []
  for (let i = 1; i <= 9; i++) {
    gameboard.push({ val: '.', index: i })
  }

  const drawX = (id) => {
    gameboard.forEach((cell) => {
      if (cell.index == id && cellNotBusy(cell)) {
        cell.val = 'X'
        console.log(gameboard)
      }
    })
  }

  const cellNotBusy = (cell) => cell.val === '.'

  const drawO = (id) => {
    gameboard.forEach((cell) => {
      if (cell.index == id && cellNotBusy(cell)) {
        cell.val = 'O'
        console.log(gameboard)
      }
    })
  }

  const draw = function (mark, id) {
    gameboard.forEach((cell) => {
      if (cell.index == id && cellNotBusy(cell)) {
        cell.val = mark
        console.log(gameboard)
      }
    })
  }

  return { gameboard, drawO, drawX, draw }
}

const Player = (name, mark) => {
  const sayHi = () => console.log(`Hi ${name}! Your mark is ${mark}`)
  return { name, mark, sayHi }
}

const board = Gameboard()
board.drawX(1)

const p1 = Player('p1', 'X')
p1.sayHi()
const p2 = Player('p2', 'O')
p2.sayHi()
