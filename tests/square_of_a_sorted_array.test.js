const { assert }  = require('chai')
const MyClass = require('../js/square_of_a_sorted_array')


describe('myClass', function() {
    let myClass;
    beforeEach(function() {
        myClass = new MyClass();
    });

    it('first example', function () {
        assert.deepEqual(myClass.sortedSquares([-4,-1,0,3,10]), [0,1,9,16,100]);
    });

    it('second example', function () {
        assert.deepEqual(myClass.sortedSquares([-7,-3,2,3,11]), [4,9,9,49,121]);
    });



});
