// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = require('../src/queue-helper');

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    if (this.value >= value) {
      if (!~this.left) return this.left.insert(value);
      this.left = new BinarySearchTree(value);
    } else {
      if (!~this.right) return this.right.insert(value);
      this.right = new BinarySearchTree(value);
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.left === null && this.right === null && target !== this.value) return false;
    if (target === this.value) return true;
    if (target < this.value) {
      if (this.left !== null) return this.left.contains(target);
    } else {
      if (this.right !== null) return this.right.contains(target);
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    /*
    const myQueue = [];
    myQueue.push(this);
    while (myQueue.length > 0) {
      const node = myQueue.shift();
      cb(node.value);
      if (node.left !== null) myQueue.push(node.left);
      if (node.right !== null) myQueue.push(node.right);
    }
    */
    const myQueue = new Queue();
    myQueue.enqueue(this);
    while (!myQueue.isEmpty()) {
      const node = myQueue.dequeue();
      cb(node.value);
      if (node.left !== null) myQueue.enqueue(node.left);
      if (node.right !== null) myQueue.enqueue(node.right);
    }
  }
}

module.exports = BinarySearchTree;
