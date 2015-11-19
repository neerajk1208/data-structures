var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    stackSize: 0,
    storage: {}
  };

  var extend = function(obj) {
  var args = Array.prototype.slice.call(arguments)
  for (var i = 0; i <args.length; i++) {
    for (var key in args[i]) {
      obj[key] = args[i][key]
    }
  }
  return obj;
}

  extend(someInstance, stackMethods)
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

//at the time of instantiation, the object will remain static

//create Stack/

//1. I want to modify a method on the created Stack. => decorator
//1Q: will Stack have new function?

//2. If, after instantiation, we modified the stackmethods object, will other instances get changed?
//2Q: will original stackMethods be affected?

