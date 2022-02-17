const { assert}  = require('chai')
const Position = require('../js/search_insert_position')


describe('Bonjour', function() {
    let position;
    beforeEach(function() {
        position = new Position();
    });

    it('should return 1 for [1,2,3,5,6] target === 2', function () {
        assert.equal(position.searchInsert([1,2,3,5,6],2), 1);
    });


    it('should return 4', function () {
        assert.equal(position.searchInsert([-1,2,3,5,8],8), 4);
    });

    it('should return 5', function () {
        assert.equal(position.searchInsert([1,2,3,5,6,9],7), 5);
    });

    it('should return 5', function () {
        assert.equal(position.searchInsert([1,3,5,6],7), 4);
    });

});
