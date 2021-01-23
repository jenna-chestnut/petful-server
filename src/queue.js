class _Node {
  constructor(data, next) {
    this.data = data; 
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const newNode = new _Node(value);

    if (!this.first) this.first = newNode;
    
    if (this.last) this.last.next = newNode;

    this.last = newNode;
  }
  dequeue() {
    if(!this.first) {
      return null;
    }

    const node = this.first;
    this.first = node.next; 

    return node.data;
  }
  show() {
    if(!this.first) { return; }

    return this.first.data;
  }
  all() {
    const all = [];

    let currNode = this.first;

    while(currNode) {
      all.push(currNode.data);
      currNode = currNode.next;
    }
    
    return all;
  }
}

module.exports = Queue;