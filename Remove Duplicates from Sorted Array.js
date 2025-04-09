function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // pointer for the next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // move unique element forward
            k++;
        }
    }

    return k;
}
