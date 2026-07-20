// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }
  size() {
    let counter = 0;
    let node = this.node;
    while (node) {
      counter++;
      node = node.next;
    }
  }
}
const list = new LinkedList();
list.Node = new Node(10);

module.exports = { Node, LinkedList };
