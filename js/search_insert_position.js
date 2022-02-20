class Position {

    searchInsert(nums, target) {

        let index = nums.findIndex((elem) => elem >= target)
        if (index === -1) {
            index = nums.length
        }
        return index

    };
}

module.exports = Position;
