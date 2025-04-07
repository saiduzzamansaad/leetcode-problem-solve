function swapPairs(head) {
    // Create a dummy node to serve as the new head
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    while (head && head.next) {
        // Nodes to be swapped
        const firstNode = head;
        const secondNode = head.next;
        
        // Swapping
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        
        // Move pointers forward
        prev = firstNode;
        head = firstNode.next;
    }
    
    return dummy.next;
}