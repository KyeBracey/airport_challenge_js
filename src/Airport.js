function Airport(capacity) {
  this.capacity = capacity || 10
  this.planes = []
}

Airport.prototype.land = function(plane) {
  if (this.planes.length >= this.capacity) throw new Error("Unable to land, airport is full")
  plane.land()
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane) {
  plane.takeOff()
  this.planes.splice(this.planes.indexOf(plane), 1)
}
