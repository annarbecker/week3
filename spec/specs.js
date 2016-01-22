describe("countUp", function(){
  it("will count up to a user's number by 1 starting at 1 and put the numbers into an array", function(){
    expect(countUp(2)).to.eql([1,2]);
  });
});

describe("pingPong", function() {
  it("will return ping for numbers divisible by 3", function() {
    expect(pingPong(3)).to.equal("ping");
  });
});
