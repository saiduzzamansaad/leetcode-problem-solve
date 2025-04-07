
function mergeTwoLists(list1, list2) {
    // Create a dummy node to serve as the starting point
    let dummy = new ListNode(-1);
    let current = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Attach the remaining elements of list1 or list2
    current.next = list1 === null ? list2 : list1;
    
    return dummy.next;
}