describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vetically, or diagonally in line with each other', function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it('is true if the vertical coordinates are inline with eachother', function() {
    expect(queenAttack([1, 1], [1, 3])).to.equal(true);
  });

  it('is true if horizontal coordinates are inline with eachother', function() {
    expect(queenAttack([2, 1], [3, 1])).to.equal(true);
  });

  it('is true if diagonal cooridants are inline with eachother', function() {
    expect(queenAttack([5, 4], [7, 6])).to.equal(true);
  });
});
