function fourSum(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
        
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates
            
            let left = j + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    // Skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
}

// Test cases with console.log
console.log("Test Case 1:", fourSum([1,0,-1,0,-2,2], 0)); 
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log("Test Case 2:", fourSum([2,2,2,2,2], 8));    
// Output: [[2,2,2,2]]
console.log("Test Case 3:", fourSum([0,0,0,0], 0));       
// Output: [[0,0,0,0]]
console.log("Test Case 4:", fourSum([1,-2,-5,-4,-3,3,3,5], -11)); 
// Output: [[-5,-4,-3,1]]
console.log("Test Case 5:", fourSum([-1,0,1,2,-1,-4], 0)); 
// Output: [[-4,0,1,3],[-1,-1,0,2]]