var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stackSize = 0;
  
  someInstance.storage = {};

  //We can try putting storage inside some Instance
  

  //this[storage] / this.storage


  //Just by adding key values to storage: storage[this.stackSize]


  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;

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
