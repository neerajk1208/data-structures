var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
  this.greet = "hello"
};

Stack.prototype.size = function() {
   return this.stackSize > 0 ? this.stackSize : 0;
 };

Stack.prototype.push = function(data) {
  this.storage[this.stackSize] = data;
  this.stackSize++;
}

Stack.prototype.pop = function() {
    var deleted = this.storage[this.stackSize-1]
    delete this.storage[this.stackSize-1]
    this.stackSize--;
    return deleted;
}

