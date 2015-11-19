var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    //Create local variable that will store last property
    var deleted = storage[stackSize - 1];
    //Delete the property
    delete storage[stackSize - 1];
    stackSize--;
    //return local variable
    return deleted;
  };

  someInstance.size = function() {
    return stackSize>0 ? stackSize : 0;

  };
  
  return someInstance;
};
