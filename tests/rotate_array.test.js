const { assert } = require('chai')
const MyClass = require('../js/rotate_array')


describe('myClass', function() {
    let myClass;
    beforeEach(function() {
        myClass = new MyClass();
    });


    it('first example', function () {
        assert.deepEqual(myClass.rotate([1,2,3,4,5,6,7], 3), [5,6,7,1,2,3,4]);
    });

    it('second example', function () {
        assert.deepEqual(myClass.rotate([-1,-100,3,99], 2), [3,99,-1,-100]);
    });

});
