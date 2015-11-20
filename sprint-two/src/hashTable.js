var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if index is not present in hastable

  //if index doesn't exist
    //this[index] = v
  //otherwise
    //set new index and make this[index+1] = v;
    //link the k to it

    if (this[index] === undefined) {
      this[index] = {};
        this[index][k] = v;
    } else {
      this[index][k] = v;
    }
    return this[index][k];
                
    //create linkedlist object
    //assign node value "Steven"
    //assign node.next "Seagal"
    //asign newNode
  }  

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    
    for (var key in this[index]) {
      if (key === k) {
        return this[index][k];
      }
    }   
    
  };  
  //start at the head. if the head matches k, return next.



  //otherwise. the newsearchNode = node.next



HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */