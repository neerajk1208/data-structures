var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var qSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[qSize] = value;
    qSize++;
  };

  someInstance.dequeue = function() {
    var deleted = storage[0];
    //remove the first
    delete storage[0];
    //storage
    //change the order and reassign values
    for (var i = 0; i<qSize-1; i++) {
      storage[i] = storage[i+1];
    }
    qSize--;
    return deleted;
  };

  someInstance.size = function() {
    return qSize > 0 ? qSize : 0;
  };

  return someInstance;
};
