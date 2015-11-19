var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackSize = 0;
  return someInstance;
};

var stackMethods = {
  size: function() {
    return this.stackSize > 0 ? this.stackSize : 0;
  },
  push: function(data) {
    this.storage[this.stackSize] = data;
    this.stackSize++;
  },
  pop: function() {
    var deleted = this.storage[this.stackSize-1]
    delete this.storage[this.stackSize-1]
    this.stackSize--;
    return deleted;
   }  
};




// someInstance.stackSize = 0;
  //var storage = {};
  