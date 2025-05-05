function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid element is greater than the rightmost, min must be on the right side
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Otherwise, the min is at mid or to the left of mid
      right = mid;
    }
  }

  return nums[left]; // left == right is the index of the smallest value
}

// Example usage:
console.log(findMin([3, 4, 5, 1, 2]));        // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));  // Output: 0
console.log(findMin([11, 13, 15, 17]));       // Output: 11
