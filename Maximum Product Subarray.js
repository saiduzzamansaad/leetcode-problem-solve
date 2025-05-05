function maxProduct(nums) {
  if (nums.length === 0) return 0;

  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    // Swap if current is negative
    if (current < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    maxProd = Math.max(current, maxProd * current);
    minProd = Math.min(current, minProd * current);

    result = Math.max(result, maxProd);
  }

  return result;
}

