
// Square of a sorted array leetcode
// Given an integer array nums sorted in non-decreasing order
// return an array of the squares of each number sorted in non-decreasing order.
class MyClass {

    sortedSquares(nums) {
        return nums.map((elem) => Math.pow(elem,2)).sort((a,b) => a-b)
    }

}

module.exports = MyClass
