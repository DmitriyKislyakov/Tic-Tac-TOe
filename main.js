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

const Player = (name, mark) => {
  const sayHi = () => console.log(`Hi ${name}! Your mark is ${mark}`)
  return { name, mark, sayHi }
}

const Game = () => {
  const board = Board()
  // board.drawX(1)
  const p1 = Player('p1', 'X')
  p1.sayHi()
  const p2 = Player('p2', 'O')
  p2.sayHi()

  for (let i=1; i<10; i++){
    if (i%2 == 0)
      board.draw(p2.mark, i)
    else
      board.draw(p1.mark, i)
  }
}

const game = Game()
