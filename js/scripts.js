var queenAttack = function(queen, piece) {
  if ((queen[0] === piece[0]) || (queen[1] === piece[1]) || (Math.abs(queen[0] - piece[0])) === (Math.abs(queen[1] - piece[1]))) {
    return true;
  } else {
    return false;
  }
};

$(function() {

  event.preventDefault()
})
