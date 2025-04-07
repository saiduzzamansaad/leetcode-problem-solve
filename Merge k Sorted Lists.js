function mergeKLists(lists) {
    // Min-heap implementation
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        
        push(node) {
            this.heap.push(node);
            this.bubbleUp();
        }
        
        pop() {
            const min = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
            }
            return min;
        }
        
        bubbleUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[parentIndex].val <= this.heap[index].val) break;
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            }
        }
        
        sinkDown() {
            let index = 0;
            const length = this.heap.length;
            while (true) {
                const leftChildIndex = 2 * index + 1;
                const rightChildIndex = 2 * index + 2;
                let swapIndex = null;
                
                if (leftChildIndex < length) {
                    if (this.heap[leftChildIndex].val < this.heap[index].val) {
                        swapIndex = leftChildIndex;
                    }
                }
                
                if (rightChildIndex < length) {
                    if (
                        (swapIndex === null && this.heap[rightChildIndex].val < this.heap[index].val) ||
                        (swapIndex !== null && this.heap[rightChildIndex].val < this.heap[leftChildIndex].val)
                    ) {
                        swapIndex = rightChildIndex;
                    }
                }
                
                if (swapIndex === null) break;
                [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
                index = swapIndex;
            }
        }
        
        isEmpty() {
            return this.heap.length === 0;
        }
    }

    // Initialize min-heap
    const minHeap = new MinHeap();
    
    // Push the head of each list into the min-heap
    for (const list of lists) {
        if (list) {
            minHeap.push(list);
        }
    }
    
    // Create a dummy node to build the result
    const dummy = new ListNode(-1);
    let current = dummy;
    
    // Process the heap until it's empty
    while (!minHeap.isEmpty()) {
        const smallest = minHeap.pop();
        current.next = smallest;
        current = current.next;
        
        if (smallest.next) {
            minHeap.push(smallest.next);
        }
    }
    
    return dummy.next;
}