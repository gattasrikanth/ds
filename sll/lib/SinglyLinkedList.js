var SinglyLinkedList = function() {
    this.HEAD = null;
    this._length = 0;
}

var Node = function(data) {
    this.data = data;
    this.next = null;
}
/**
 * A common message object to communicate the list actions.
 */
var message = {
    "failure": null,
    "success": null,
    "code": -1
}
/**
 * Pseudocode:
 * Case1: Adding item when HEAD is NULL. ie empty list.
 *        set HEAD to the current Node created.
 * Case2: Adding item anywhere else.
 *        traverse to the end of the list.
 *        set end of the list node --> next to current node.
 * @param {value tobe added to the list} value 
 */
SinglyLinkedList.prototype.addItem = function(value) {
    var currentNode = this.HEAD;
    //Create a Node with the given data.
    var node = new Node(value);
    //If HEAD is null
    if(!currentNode) {
        this.HEAD = node;
        this._length++;

        message.success = "Item added at HEAD."
        message.code = "0"
        return message;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;

    message.success = "Node added at the end of the list."
    message.code = 0;
    return message;
}

/**
 * Removes the given value from the list.
 * Pseuocode:
 * If head is null return.
 * Removing an item at head.??
 * else traverse the list to find a match. Once the match is find.
 * set prevnode next = current.next 
 * @param {value tobe deleted from the list} value 
 */
SinglyLinkedList.prototype.removeItem = function(value) {
    var currentNode = this.HEAD;
    if(!currentNode) {
        message.failure = "Your list is empty";
        message.failure = -1
        return message;
    }
    //Removing a HEAD node.
    if(currentNode.data == value) {
        this.HEAD = currentNode.next;
        currentNode = null;
        message.success  = "Element found at HEAD and removed."
        message.code = 0;
        return message;
    }
    var previousNode;
    while(currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if(currentNode.data == value) {
            previousNode.next = currentNode.next;
            currentNode = null;
            message.success = "Node found and deleted."
            message.code = 0;
            return message;
        }
        //currentNode = currentNode.next;
    }
    //End of the list reached and no match found.
    message.failure = "No Element found."
    message.success = null;
    message.code = -1
    return message;
}

/**
 * To reverse the entire list using recursion.
 * PseudoCode:
 * Take two nodes and revers the link recursively.
 */
SinglyLinkedList.prototype.ReverseList_Recursion = function() {
    var currentNode = this.HEAD;
    var previousNode = null;
    this.ReverseList(previousNode, currentNode);
}

SinglyLinkedList.prototype.ReverseList = function (previousNode, currentNode) {
    // Checking END of the List and Set HEAD to the last Node.
    // Exit/Base Condition for the recussion.
    if(!currentNode.next) {
        this.HEAD = currentNode;
        return;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
    this.ReverseList(previousNode, currentNode);
    previousNode.next = null;
    currentNode.next = previousNode;
    return;
}
/**
 * To print the complete list.
 * In our case, simply return a array of items to the caller.
 * 
 * Pseudocode:
 *  if the list is empty: return message empty
 *  else read each node from the head to tail, and return data.
 */
SinglyLinkedList.prototype.printList = function() {
    var currentNode = this.HEAD;
    if(!currentNode) {
        message.failure = "Your List is empty";
        message.code = -1;
        message.success = null;
        return message;
    }
    message.result = [];
    while(currentNode) {
        message.result.push(currentNode.data);
        currentNode = currentNode.next;
    }
    message.code = 0;
    return message
}
