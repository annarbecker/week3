describe("countUp", function(){
  it("will count up to a user's number by 1 starting at 1 and put the numbers into an array", function(){
    expect(countUp(2)).to.eql([1,2]);
  });
});

describe("pingPong", function() {
  it("will return ping for numbers divisible by 3", function() {
    expect(pingPong(3)).to.equal("ping");
  });

  it("will return pong for numbers divisible by 5", function() {
    expect(pingPong(5)).to.equal("pong");
  });

  it("will return pingpong for numbers divisible by 3 and 5", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });

  it("will return the number for a number that is not divisible by 3, 5, or 15", function(){
    expect(pingPong(1)).to.equal(1);
  });
});
