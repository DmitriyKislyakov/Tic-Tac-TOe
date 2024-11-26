const Board = () => {
  const board = []
  for (let i = 1; i <= 9; i++) {
    board.push({ val: '.', index: i })
  }

  const drawX = (id) => {
    board.forEach((cell) => {
      if (cell.index == id && cellNotBusy(cell)) {
        cell.val = 'X'
        console.log(board)
      }
    })
  }

  const cellNotBusy = (cell) => cell.val === '.'

  const drawO = (id) => {
    board.forEach((cell) => {
      if (cell.index == id && cellNotBusy(cell)) {
        cell.val = 'O'
        console.log(board)
      }
    })
  }

  const draw = function (mark, id) {
    board.forEach((cell) => {
      if (cell.index == id && cellNotBusy(cell)) {
        cell.val = mark
        console.log(board)
      }
    })
  }

  return { board, drawO, drawX, draw }
}

const Player = (name, mark, cells = []) => {
  const sayHi = () => console.log(`Hi ${name}! Your mark is ${mark}`)
  return { name, mark, cells, sayHi }
}

const Game = () => {
  const isWinLine = (cells) => {
    if (cells.length > 2) {
      if (winCombo.some((line) => line.every((num) => cells.includes(num))))
        return true
    }
  }

  const makeMove = (player, cell, win = false) => {
    board.draw(player.mark, cell)
    player.cells.push(cell)
    console.log(player.mark, player.cells)

    if (isWinLine(player.cells)) {
      win = true
      console.log(`${player.name} is winner`)
    }
  }

  const board = Board()
  // board.drawX(1)
  const p1 = Player('p1', 'X')
  p1.sayHi()
  const p2 = Player('p2', 'O')
  p2.sayHi()

  const winCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]

  for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) makeMove(p2, i)
    // else board.draw(p1.mark, i)
    else makeMove(p1, i)
  }

  return { isWinLine, makeMove }
}

const game = Game()
