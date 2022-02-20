const { assert}  = require('chai')
const Numbers = require('../js/add_two_numbers')


describe('addTwoNumbers', function() {
    let numbers;
    beforeEach(function() {
        numbers = new Numbers();
    });

    it('Example 1', function () {
        assert.deepEqual(numbers.addTwoNumbers([2,4,3],[5,6,4]), [7,0,8]);
    });

    it('Example 2', function () {
        assert.deepEqual(numbers.addTwoNumbers([0],[0]), [0]);
    });

    it('Example 3', function () {
        assert.deepEqual(numbers.addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]), [8,9,9,9,0,0,0,1]);
    });

});
