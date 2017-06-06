function Airport(capacity) {
  this.capacity = capacity || 10
  this.planes = []
  this.weather = new Weather();
}

Airport.prototype.land = function(plane) {
  if (this.isFull()) throw new Error("Unable to land, airport is full")
  if (this.isStormy()) throw new Error("Unable to land, weather is stormy")
  plane.land()
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane) {
  plane.takeOff()
  this.planes.splice(this.planes.indexOf(plane), 1)
}

Airport.prototype.isFull = function() {
  return this.planes.length >= this.capacity
}

Airport.prototype.isStormy = function() {
  if (this.weather.condition() === "Stormy") return true
  return false
}
