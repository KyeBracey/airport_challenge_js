describe("Plane", function() {

  var plane;

  it("Can confirm it has landed at an airport", function() {
    plane = new Plane();
    plane.land();
    expect(plane.flying).toEqual(false);
  });
});
