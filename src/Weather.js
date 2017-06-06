var Weather = function(){
  this.conditions = ["Stormy", "Clear", "Clear", "Clear"]
};

Weather.prototype.condition = function() {
  return this.conditions[Math.floor(Math.random()*this.conditions.length)];
}
