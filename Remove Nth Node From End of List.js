function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    
    // Move fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the nth node
    slow.next = slow.next.next;
    
    return dummy.next;
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Test cases with console.log
const test1 = createLinkedList([1,2,3,4,5]);
console.log("Test Case 1:", linkedListToArray(removeNthFromEnd(test1, 2))); 
// Output: [1,2,3,5]

const test2 = createLinkedList([1]);
console.log("Test Case 2:", linkedListToArray(removeNthFromEnd(test2, 1)));    
// Output: []

const test3 = createLinkedList([1,2]);
console.log("Test Case 3:", linkedListToArray(removeNthFromEnd(test3, 1)));       
// Output: [1]

const test4 = createLinkedList([1,2,3,4,5,6,7,8,9,10]);
console.log("Test Case 4:", linkedListToArray(removeNthFromEnd(test4, 3))); 
// Output: [1,2,3,4,5,6,7,9,10]

const test5 = createLinkedList([1,2,3,4,5]);
console.log("Test Case 5:", linkedListToArray(removeNthFromEnd(test5, 5))); 
// Output: [2,3,4,5]