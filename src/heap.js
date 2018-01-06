/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        const index = this.storage.push(val) - 1;
        this.size++;
        this.bubbleUp(index);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        if (this.storage.length === 2) {
        this.size--;
        return this.storage.pop();
      } else if (this.storage.length === 1) {
        return this.storage[0];
      }
      this.size--;
      const maxStorage = this.storage[1];
      if (this.storage[1] = this.storage.pop()) {
      this.siftDown(1);
      return maxStorage;
      }
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        return this.storage[1];
    }
    // Returns the size of the heap
    getSize() {
        return this.size;
    }
    // Returns the storage array
    getStorage() {
        return this.storage;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
        const parent = Math.floor(index / 2);
        if (parent > 0 && this.storage[parent] < this.storage[index]) {
          [this.storage[parent], this.storage[index]] = [
            this.storage[index],
            this.storage[parent]
          ];
          this.bubbleUp(parent);
      }
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      const c1 = index * 2;
      const c2 = index * 2 + 1;
      let maxC;
      if (this.storage[c1] !== undefined) {
        if (this.storage[c2] === undefined) {
          maxC = c1;
      } else if (this.storage[c2] !== undefined) {
          maxC = this.storage[c1] > this.storage[c2] ? c1 : c2;
      }
      if (this.storage[index] < this.storage[maxC]) {
          [this.storage[maxC], this.storage[index]] = [
              this.storage[index],
              this.storage[maxC]
          ];
          this.siftDown(maxC);
        }
      }
    }
}

module.exports = Heap;
