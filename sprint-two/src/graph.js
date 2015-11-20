

// ------------------------
// Instantiate a new graph
var Graph = function() {

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //checking to see if a value is in a graph
  //for in loop over the keys
  for (var key in this) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //store edges of node
  var tempEdges = this[node];
  //delete node
  delete this[node];
  if (tempEdges.length > 1) {
    //loop through tempEdges (which are the list of nodes)
    for (var i = 0; i<tempEdges.length; i++) {
      //go through each of these values and remove node from their list of edges
      this.tempEdges[i].splice(_.indexOf(this.tempEdges[i], node), 1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check to see if fromNode's edges contains toNode's value
  //vice versa should work by default 
  return _.contains(this[fromNode], toNode)
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //fromNode's number is getting passed to toNode's edges
  //toNodes's number is getting passed to fromNode's edges
  this[toNode].push(fromNode);
  this[fromNode].push(toNode);

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //access fromNode's edges
    //index of toNode in fromNode's edges
    //splice(index, 1)
  //access toNode's edges
    //index of fromNode in toNode's edges
    //splice(index, 1)

  this[fromNode].splice(_.indexOf(this[fromNode],toNode), 1)
  this[toNode].splice(_.indexOf(this[toNode],fromNode), 1)
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(value, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var newGraph = new Graph();
 //this would contain edges and value



