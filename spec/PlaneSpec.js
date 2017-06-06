describe("Plane", function() {

  var plane;

  beforeEach(function(){
    plane = new Plane();
  })

  it("Can confirm it has landed at an airport", function() {
    plane = new Plane();
    plane.land();
    expect(plane.flying).toEqual(false);
  });

  it("Can confirm it has taken off", function() {
    plane = new Plane();
    plane.land();
    plane.takeOff();
    expect(plane.flying).toEqual(true);
  })
});
