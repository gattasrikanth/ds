<br><h3>Data Structures</h3>
Singly Linked List
* Create a Singly Linked list
* Add Elements to List
* Delete Elements to List
* Insert Element at index.
* Delete Element at index.

<a href="">Find the middle element in Singly Linked List.</a>
<br>
##### Solution #1
* Traverse the list till the end node
* Count number of node during first traversal.
* Traverse again up n/2
* return the node at n/2 position.
###### Time Complexity : Big O(n) or Ø(n)

##### Solution #2
* Hopping the list using two pointers.
* Initialize two variable one say *FastPointer* and second say *SlowPointer*
* On each itiration, advance *FastPointer* by two nodes and *SlowPointer* by one node.
* Once end of the list is reached. *SlowPointer* will be the middle of the list.
###### Time Complexity : Big O(n) or Ø(n)

##### Solution #3
* Initialize a counter at zero.
* Traverse each node until the end of the list.
* Increment the counter at each step and while counter is odd, increment the mid pointer.
* At the end of the list mid will be the mid pointer.
###### Time Complexity : Big O(n) or Ø(n)