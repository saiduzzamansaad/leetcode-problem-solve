// problem :Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

//solution



Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};


const arr1 = [1, 2, 3];
console.log(arr1.last()); 

const arr2 = [];
console.log(arr2.last()); 