describe("pingPong", function() {
  it("will count up to a user's number by 1 and put the numbers into an array", function () {
    expect(pingPong(2)).to.eql([1,2]);
  });

  it("will return ping for numbers divisible by 3 in the array", function() {
    expect(pingPong(3)).to.eql([1,2,"ping"]);
  });

  it("will return pong for numbers divisible by 5 in the array", function() {
    expect(pingPong(5)).to.eql([1,2,"ping",4,"pong"]);
  });

  it("will return pingpong for numbers divisible by 3 and 5 in the array", function (){
    expect(pingPong(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  });
});
