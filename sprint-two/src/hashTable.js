var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if index is not present in hastable
  if (this[index] === undefined) {
    this[index] = v ;
  } else {
    var temp = this[index];
    this[index] = LinkedList();
    this[index].addToTail();
    //create linkedlist object
    //assign node value "Steven"
    //assign node.next "Seagal"
    //asign newNode
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (typeof this[index] !== 'object') {
    return this[index];  
  } else {
    console.log("hi")

  }


  
  //start at the head. if the head matches k, return next.



  //otherwise. the newsearchNode = node.next



};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var LinkedList = function() {
  var list = {};
  list.head = null;
    //list.head = the first node
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    }
    // (list.head !== null)
    else if (list.head.next === null) {
      console.log(list.head)
      var newNode = Node(value);
      list.head.next = newNode;
      list.tail = newNode;
    }
    else { 
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }    
  };

  list.removeHead = function() {
    //reassign node.next at list.head = new head
    //there is a node stored at list.head
    //new list.head should equal list.head.next
    
    var returnHead = list.head
    list.head = list.head.next
    return returnHead.value;
  };

  list.contains = function(target) {

    var isTrue = false;
    var workingNode = list.head;
    var checkNodes = function(node) {
      if (node.next === null) {
        if (node.value === target) {
          isTrue = true;
        }
        return;
      } else if (node.value === target){
        isTrue = true;
      } else {
        checkNodes(node.next);
      }
    }
    checkNodes(workingNode)
    return isTrue;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
}; 

 var test = new HashTable();
 test.insert("bob", "dole")
 test.insert("val1", "val2)


