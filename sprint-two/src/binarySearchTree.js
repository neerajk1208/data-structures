var BinarySearchTree = function(value) {
    var BST = Object.create(searchMethods)
    BST.value = value;
    BST.left = null;
    BST.right = null;
    return BST;
};

var searchMethods = {
  insert: function(value) {    
    //if value > this.value
      //we're going right
      //if this.value's right prop is null
        //insert newNode
           //if input value is greater than value at node
    var check = function(obj) {
      if (value > obj.value) {
          if (obj.right !== null) {
            check(obj.right)
          } else {
            var newNode = BinarySearchTree(value);
            obj.right = newNode;
          }
      } else if (value < obj.value) {
        if (obj.left !== null) {
           check(obj.left)
        } else {
          var newNode = BinarySearchTree(value)
          obj.left = newNode;
        }
      }
    }
    check(this);
},

contains: function(target) {
  
  var searchNodes = function(node) {
    //check if node === null
    if (node === null) {
      return false;
    } 
    if (node.value === target) {
      return true;
    } else if (node.value > target) {
      return searchNodes(node.left);
    } else if (node.value < target) {
      return searchNodes(node.right)
    }
  }
  return searchNodes(this); 
},


depthFirstLog: function(callback) {
  var searchNodes = function(node) {
    if (node === null) {
      return;
    } else {
      callback(node.value);
      searchNodes(node.right);
      searchNodes(node.left);
    }
  }
  searchNodes(this)
}
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
