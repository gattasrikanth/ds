var BinarySearchTree = function () {
    this.ROOT = null;
}

var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
/**
 * A common message object to communicate the list actions.
 */
var message = {
    "failure": null,
    "success": null,
    "code": -1
}

//Adds an item to the tree.
BinarySearchTree.prototype.addItemToTree = function (data) {
    var root = this.ROOT;
    //var node = new Node(data);
    //If the tree is empty, ie. root is null. Then insert item as root.
    if (!root) {
        this.ROOT = new Node(data);;
        return;
    }
    root = insertNode(root, data);
}

function insertNode(root, data) {
    if(!root) {
        return new Node(data);
    }
    if (data <= root.data) {
        root.left = insertNode(root.left, data);
    }
    if (data > root.data) {
        root.right = insertNode(root.right, data);
    }
    return root;
}

var treeArray = new Array();

BinarySearchTree.prototype.preOrderTraversal = function() {
    //Pre order traversal of the BinaryTree:
    //Step:1 Visit the node,
    //Step:2 Visit the left sub-tree
    //Step:3 Visit right sub-tree
    var root = this.ROOT;
    if (!root) {
        returnEmptyTreeObj();
    }
    treeArray = [];
    message.result = preOrderTraversal(root);
    message.success = "PreOrderTraversal completed."
    message.code = 0;
    message.failure = null;
    return message;
}

function preOrderTraversal(root) {
    if(!root) {
        return;
    }
    treeArray.push(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
    return treeArray;
}

BinarySearchTree.prototype.inOrderTraversal = function() {
    //Pre order traversal of the BinaryTree:
    //Step:1 Visit the left sub-tree
    //Step:2 Visit the node
    //Step:3 Visit right sub-tree
    var root = this.ROOT;
    if (!root) {
        returnEmptyTreeObj();
    }
    treeArray = []
    message.result = inOrderTraversal(root);
    message.success = "In-Traversal completed."
    message.code = 0;
    message.failure = null;
    return message;
}

function inOrderTraversal(root) {
    if(!root) {
        return;
    }
    inOrderTraversal(root.left);
    treeArray.push(root.data);
    inOrderTraversal(root.right);
    return treeArray;
}
BinarySearchTree.prototype.postOrderTraversal = function() {
    //Pre order traversal of the BinaryTree:
    //Step:1 Visit the left sub-tree
    //Step:2 Visit right sub-tree
    //Step:3 Visit the node
    var root = this.ROOT;
    if (!root) {
        returnEmptyTreeObj();
    }
    treeArray=[];
    message.result = postOrderTraversal(root);
    message.success = "Post-OrderTraversal completed."
    message.code = 0;
    message.failure = null;
    return message;
}

function postOrderTraversal(root) {
    if(!root) {
        return;
    }
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    treeArray.push(root.data);
    return treeArray;
}

BinarySearchTree.prototype.searchTree = function(data) {
    var root = this.ROOT;
    if(!root) {
        returnEmptyTreeObj();
    }
    return searchBinaryTree(root, data);
}

function searchBinaryTree(root, data) {
    if(!root) {
        message.failure = "Element Not found";
        message.code = -1;
        return message;
    }
    if(root.data == data) {
        message.code = 0;
        message.success = "Element Found."
        return message;
    }
    if(data <= root.data) {
        return searchBinaryTree(root.left, data);
    }
    if(data > root.data) {
        return searchBinaryTree(root.right, data);
    }
}
/**
 * Small Util to return a Empty List object.
 */
function returnEmptyTreeObj() {
    message.failure = "Your Tree is Empty";
    message.code = -1;
    message.success = null;
    return message;
}