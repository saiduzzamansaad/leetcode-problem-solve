function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function listToArray(node) {
    let arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

// Example usage:
const l1 = arrayToList([2, 4, 3]);
const l2 = arrayToList([5, 6, 4]);
const result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [7, 0, 8]

