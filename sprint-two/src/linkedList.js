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

var test1 = LinkedList();

test1.addToTail(4);
test1.addToTail(5)

test1


/*
 * Complexity: What is the time complity of the above functions?
 */

 /*

 if (list.tail === null) {
      var node = Node(value);
      list.head = node;
      list.tail = node; 
    }
    else {
      //list.head stays the same
      //list.tail = node
      var workingNode = Node(value)
      node.next = workingNode.value;
      workingNode.next = null
    }

    */
