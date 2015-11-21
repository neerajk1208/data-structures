var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  //within the index there will be an array of arrays
  //Hash Index(0): [[Steven, Segal], [Neeraj, Koh]]

  //Key should go into index 0, Value into index 1 of each tuple

  if (this[index] === undefined) {
    this[index] = [];
    this[index].push([k,v]);
  } else {
    if (this[index][0][0] === k) {
      this[index][0][1] = v
    } else {  
      this[index].push([k,v]);
    }  
  }
    //if the key exists already in the array, overwrite the value
    
}  

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Notice that the length > 1
  if (!this[index]) {
    return undefined;
  }

  if (this[index].length > 1) {
    for (var i =0; i< this[index].length; i++) {
      if (this[index][i][0] === k) {
        return this[index][i][1];
      }    
    }
  }  else {
    return this[index][0][1]
  }
};
   
  //start at the head. if the head matches k, return next.



  //otherwise. the newsearchNode = node.next



HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this[index].length > 1) {
    for (var i =0; i< this[index].length; i++) {
      if (this[index][i][0] === k) {
        delete this[index][i];
      }    
    }
  } else {
    delete this[index];
  } 
};




/*
 * Complexity: What is the time complexity of the above functions?
 */