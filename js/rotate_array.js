// Rotate array leetcode
// Given an array, rotate the array to the right by k steps, where k is non-negative.
class MyClass {

    rotate(nums, k) {
        // for(let i = 0; i<k ; i++) {
        //     const temp = nums.pop()
        //     nums.unshift(temp)
        // }
        // return nums

        return nums.splice(nums.length-k).concat(nums);



    }

}

module.exports = MyClass
