var BinarySearchTree = function(value) {
    var BST = Object.create(searchMethods)
    BST.value = value;
    BST.left = undefined;
    BST.right = undefined;
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
    
          if (obj.right !== undefined) {
            check(obj.right)
          } else {
            var newNode = BinarySearchTree(value);
            obj.right = newNode;
          }
      } else if (value < obj.value) {
        if (obj.left !== undefined) {
           check(obj.left)
        } else {
          var newNode = BinarySearchTree(value)
          obj.left = newNode;
        }
      }
    }
    check(this);
},

contains: function(value) {
  return 0;
  
},



depthFirstLog: function(first_argument) {
  return 0;
}

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
