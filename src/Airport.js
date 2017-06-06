function Airport(capacity) {
  this.capacity = capacity || 10
  this.planes = []
}

Airport.prototype.land = function(plane) {
  plane.land()
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane) {
  plane.takeOff()
  this.planes.splice(this.planes.indexOf(plane), 1)
}
