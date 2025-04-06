function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// Test cases with console.log
console.log("Test Case 1:", threeSum([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log("Test Case 2:", threeSum([0,1,1]));          // Output: []
console.log("Test Case 3:", threeSum([0,0,0]));          // Output: [[0,0,0]]
console.log("Test Case 4:", threeSum([-2,0,1,1,2]));     // Output: [[-2,0,2],[-2,1,1]]
console.log("Test Case 5:", threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])); // Multiple triplets