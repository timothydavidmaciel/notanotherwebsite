const tolowerUcFirst = v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()

const answer = prompt(
  'Do you want to play Rock Paper Scissors? Type (y)es or (n)o!'
)

if (answer && ['Y', 'YES'].includes(answer.toUpperCase())) {
  let board = ['ROCK', 'PAPER', 'SCISSORS']
  let answer = prompt('(R)ock, (P)aper, or (S)cissors?')

  if (board.includes(answer.toUpperCase())) {
    let them = board[Math.floor(Math.random() * 3)]
    let you = answer.toUpperCase()

    if (them === you) {
      console.log('draw', you, them)
      alert(`Draw, they choose ${tolowerUcFirst(them)} too!`)
    } else {
      // win rules
      if (
        // SCISSORS
        (['S', 'SCISSORS'].includes(you) && them === 'PAPER') ||
        // PAPER
        (['P', 'PAPER'].includes(you) && them === 'ROCK') ||
        // ROCK
        (['R', 'ROCK'].includes(you) && them === 'SCISSORS')
      ) {
        console.log('you win', you, them)
        alert(`You win, they choose ${tolowerUcFirst(them)}!`)
      } else {
        console.log('you lose', you, them)
        alert(`You lose, they choose ${tolowerUcFirst(them)}!`)
      }
    }
  }
}
