Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    
    const result = new Array(rowsCount);
    for (let i = 0; i < rowsCount; i++) {
        result[i] = new Array(colsCount);
    }
    
    let index = 0;
    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) {
            // Traverse from top to bottom
            for (let row = 0; row < rowsCount; row++) {
                result[row][col] = this[index++];
            }
        } else {
            // Traverse from bottom to top
            for (let row = rowsCount - 1; row >= 0; row--) {
                result[row][col] = this[index++];
            }
        }
    }
    
    return result;
};

// Example usage:
const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
const rowsCount = 5;
const colsCount = 4;
console.log(nums.snail(rowsCount, colsCount));