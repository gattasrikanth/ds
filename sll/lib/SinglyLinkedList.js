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
        //currentNode = currentNode.next;
    }
    message.code = 0;
    return message
}