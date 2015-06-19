var body = document.querySelector('body'),
    div = document.getElementsByTagName('div'),
    span = document.querySelector('span'),
    square = document.getElementsByClassName('squares'),
    combination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    playerO = [],
    playerX = []

function newGame () {
  console.log(div)
  var player = prompt('Who is the going first.Choose O or X').toString().toUpperCase()
  if (player !== 'X' && player !== 'O') {
      player = prompt('Who is the going first.Choose O or X').toString().toUpperCase()
  }
  function changePlayer () {
    player = player === 'O' ? 'X' : 'O'
  }
  function reset (){
    console.log('hello')
    for (var i = 0; i< div.length; i++) {
    div[i].classList.remove('not-rm')
    div[i].innerHTML = ""
  }
  playerX = []
  playerO = []
  }

  body.addEventListener('click', function(e) {
    if( e.target.className === "squares" && e.target.className !== 'not-rm'){
      var output = parseInt(e.target.dataset.number)
      console.log(player)
      square[output].innerHTML = player 
      e.target.classList.add("not-rm")
      ;(function checkForWinner (){
        if (player === 'O' ) {
          playerO.push(e.target.dataset.number)
          playerO = playerO.sort()
          console.log(playerO)
          if(playerO.length >= 3){
            combination.forEach(function (value) {
            if(value.reduce(function(bool, elem) {
              bool = bool && (playerO.toString().includes(elem))
              return bool
            } ,true))
            { alert("playerO is the winner")
              reset()}
            })}
          } else {
            playerX.push(e.target.dataset.number)
            if(playerX.length >= 3){
              combination.forEach(function (value) {
                if(value.reduce(function(bool, elem) {
                  bool = bool && (playerX.toString().includes(elem))
                  return bool
                } ,true))
                { alert("playerX is the winner")
                  reset()}
              })}}
      }())
      changePlayer()
    }
  })
}


span.addEventListener('click', function() {
  newGame()
})
