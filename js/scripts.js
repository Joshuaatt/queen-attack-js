var queenAttack = function(queen, piece) {
  if ((queen[0] === piece[0]) || (queen[1] === piece[1]) || (Math.abs(queen[0] - piece[0])) === (Math.abs(queen[1] - piece[1]))) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $("form#queen-attack").submit(function(event) {
    var queen_start = [parseInt($("input#queen-x").val()), parseInt($("input#queen-y").val())];
    var piece_start = [parseInt($("input#piece-x").val()), parseInt($("input#piece-y").val())];
    var result = queenAttack(queen_start, piece_start);

    if (result) {
      $(".not").text("");
    } else {
      $(".not").text("not");
    }

    $("result").show();
    event.preventDefault();
  });
});
