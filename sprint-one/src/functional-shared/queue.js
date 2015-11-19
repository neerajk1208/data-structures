var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage: {}, 
    qSize: 0
  };

  var extend = function(obj) {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i <args.length; i++) {
    for (var key in args[i]) {
      obj[key] = args[i][key];
    }
  }
  return obj;
}

  extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {
  size: function() {
    return this.qSize > 0 ? this.qSize : 0;
  }, 
  enqueue: function(value) {
    this.storage[this.qSize] = value;
    this.qSize++;
  }, 
  dequeue: function() {
     var deleted = this.storage[0];
    //remove the first
    delete this.storage[0];
    //storage
    //change the order and reassign values
    for (var i = 0; i<this.qSize-1; i++) {
      this.storage[i] = this.storage[i+1];
    }
    this.qSize--;
    return deleted;
  }
};


