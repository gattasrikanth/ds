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

SinglyLinkedList.prototype.addItemToListAtIndex = function (data, index) {
    var currentNode = this.HEAD;
    var node = new Node(data);
    //If insearting at head.
    if(index == 0) {
        node.next = currentNode;
        this.HEAD = node;
        message.success = "Node inserted at HEAD";
        message.failure = null
        message.code = 0;
        return message;
    }

    var position = 0;

    while (currentNode) {
        if(position + 1 == index) {
            node.next = currentNode.next;
            currentNode.next = node;
            message.success = "Node inserted at index: " + index;
            return message;
        }
        currentNode = currentNode.next;
        position++;
    }

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
        return returnEmptyListObj();
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

SinglyLinkedList.prototype.removeItemFromListAtIndex = function(index) {
    var currentNode = this.HEAD;
    if(!currentNode) {
        return returnEmptyListObj();
    }
    //Removing a HEAD node.
    if (index == 0) {
        this.HEAD = currentNode.next;
        currentNode = null;
        message.success  = "Element at Index (0), HEAD is removed. New HEAD updated."
        message.code = 0;
        return message;
    }
    //Removing at any other position:
    var position = 0;
    while(currentNode) {
        if(position + 1 == index) {
            var temp = currentNode.next;
            currentNode.next = temp.next;
            temp = null;
            message.success = "Node found and deleted."
            message.code = 0;
            return message;
        }
        currentNode = currentNode.next;
        position++;
    }
}
/**
 * To reverse the entire list using recursion.
 * PseudoCode:
 * Take two nodes and revers the link recursively.
 */
SinglyLinkedList.prototype.ReverseList_Recursion_Logic1 = function() {
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

SinglyLinkedList.prototype.ReverseList_Recursion_Logic2 = function() {
    var currentNode = this.HEAD;
    this.ReverseNode(currentNode);
    currentNode.next = null;
    return;
}

SinglyLinkedList.prototype.ReverseNode = function(currentNode) {
    //Basecase: if reached end of the list then set node as HEAD node.
    if (!currentNode.next) {
        this.HEAD = currentNode;
        return;
    }
    this.ReverseNode(currentNode.next);
    var temp = currentNode.next;
    temp.next = currentNode;
    currentNode.next = null;
}

SinglyLinkedList.prototype.reverseGroups = function(k) {
    var currentNode = this.HEAD;
    if(!currentNode) {
        return returnEmptyListObj();
    }
    this.HEAD = reverseInGroupsOfK(currentNode, k);
}

function reverseInGroupsOfK(currentNode, k) {
    var startNode = currentNode;
    var previousNode = null;
    var counter = 1;
    var nextNode = null;

    while(counter <= k && currentNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
        counter++;
    }
    if(currentNode) {
        startNode.next = reverseInGroupsOfK(currentNode, k);
    }
    return previousNode;
}

SinglyLinkedList.prototype.middleOfTheList1 = function() {
    var mid = 0;
    if (!this.HEAD) {
        return returnEmptyListObj();
    }

    var currentNode = this.HEAD;
    var length = 0;
    var step = 0;
    while(currentNode) {
        step++;
        length++;
        currentNode = currentNode.next;
    }
    var index = 0;
    currentNode = this.HEAD;
    length = parseInt(length/2);
    while(index != length) {
        step++;
        currentNode = currentNode.next;
        index++;
    }
    log("In while loop " + step + " times")
    message.success = "Middle of the list is: " + currentNode.data;
    message.code = 0;
    message.failure = null;
    return message;
}

/**
 * Algorithm:
 * Hopping the list using two pointers.
 * Initialize two variable one say *FastPointer* and second say *SlowPointer*
 * On each itiration, advance *FastPointer* by two nodes and *SlowPointer* by one node.
 * Once end of the list is reached. *SlowPointer* will be the middle of the list.
 */
SinglyLinkedList.prototype.middleOfTheList2 = function() {
    var currentNode = this.HEAD;
    var slowPointer = currentNode;
    var fastPointer = currentNode;
    if(!currentNode) {
        return returnEmptyListObj();
    }
    var step=0;
    while (fastPointer && fastPointer.next) {
        step++;
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    log("In while loop " + step + " times")
    message.success = "Middle of the list is: " + slowPointer.data;
    message.failure = null, message.code = 0;
    return message;
}
/**
 * Initialize a counter at zero.
 * Traverse each node until the end of the list.
 * Increment the counter at each step and while counter is odd, increment the mid pointer.
 * At the end of the list mid will be the mid pointer.
 */
SinglyLinkedList.prototype.middleOfTheList3 = function() {
    var currentNode = this.HEAD;
    if(!currentNode) {
        return returnEmptyListObj();
    }
    var counter = 0;
    var midNode = currentNode;
    var step = 0;
    while(currentNode) {
    step++;
        if(counter % 2  == 1) {
            midNode = midNode.next;
        }
        currentNode = currentNode.next;
        counter++;
    }
    log("In while loop " + step + " times")
    message.success = "Middle of the list is: " + midNode.data;
    message.failure = null, message.code = 0;
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
        return returnEmptyListObj();
    }
    message.result = [];
    while(currentNode) {
        message.result.push(currentNode.data);
        currentNode = currentNode.next;
    }
    message.code = 0;
    return message
}

/**
 * Small Util to return a Empty List object.
 */
function returnEmptyListObj() {
    message.failure = "Your List is Empty";
    message.code = -1;
    message.success = null;
    return message;
}