var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qSize = 0;
};

//create prototype functions

Queue.prototype.size = function() {
    return this.qSize > 0 ? this.qSize : 0;
  }

Queue.prototype.enqueue = function(data) {
    this.storage[this.qSize] = data;
    this.qSize++;
  }
Queue.prototype.dequeue = function() {
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

