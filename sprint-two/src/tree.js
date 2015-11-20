var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  //extend tree methods to newTree
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  //take value
  //set that value as node
  //
  //push node to newTree.children
  this.children.push(Tree(value));  // fix me
};

treeMethods.contains = function(target) {
  //create variable called isTrue, set to false
  //if node === target
    //isTrue = true
    //return
  //otherwise if tree has children
    //loop through the children
      //call checkNode on each child
  //return isTrue
  var isTrue = false;
  var checkNode = function(node) {
    if (node.value === target) {
      isTrue = true;
      return;
    } else if (node.children.length > 0) {
      _.each(node.children, function(element) {
        checkNode(element);
      });
    }
  }
  checkNode(this);
  return isTrue;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
