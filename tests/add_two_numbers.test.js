const { assert}  = require('chai')
const Numbers = require('../js/add_two_numbers')


describe('addTwoNumbers', function() {
    let numbers;
    beforeEach(function() {
        numbers = new Numbers();

    });

    it('Example 1', function () {
        l1 = numbers.tabToList([2,4,3])
        l2 = numbers.tabToList([5,6,4])
        l3 = numbers.tabToList([7,0,8].reverse())
        assert.deepEqual(numbers.addTwoNumbers(l1,l2), l3);
    });

    it('Example 2', function () {
        l1 = numbers.tabToList([0])
        l2 = numbers.tabToList([0])
        l3 = numbers.tabToList([0].reverse())
        assert.deepEqual(numbers.addTwoNumbers(l1,l2), l3);
    });

    it('Example 3', function () {
        l1 = numbers.tabToList([9,9,9,9,9,9,9])
        l2 = numbers.tabToList([9,9,9,9])
        l3 = numbers.tabToList([8,9,9,9,0,0,0,1].reverse())
        assert.deepEqual(numbers.addTwoNumbers(l1,l2), l3);
    });


    it('Example 3', function () {
        l1 = numbers.tabToList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
        l2 = numbers.tabToList([4,6,5])
        l3 = numbers.tabToList([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].reverse())
        assert.deepEqual(numbers.addTwoNumbers(l1,l2), l3);
    });

});
