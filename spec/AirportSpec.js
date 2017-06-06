
describe("Airport", function() {

  var airport;

  it("Has a default capacity of 10", function() {
    airport = new Airport();
    expect(airport.capacity).toEqual(10);
  });

  it("Has a capacity of 5 when passed a parameter of 5", function() {
    airport = new Airport(5);
    expect(airport.capacity).toEqual(5);
  });

  it("can instruct a plane to land", function() {
    airport = new Airport();
    var plane = jasmine.createSpyObj('plane', ['land']);
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });
});
