function Airport(capacity) {
  this.capacity = capacity || 10
}

Airport.prototype.land = function(plane) {
  plane.land()
}
