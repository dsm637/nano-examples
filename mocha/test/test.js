var m = require('../module.js');

describe('module.js', function () {
    describe('funToTest', function () {
        it('The function should return sum of two intereg', function () {
			var n = m.funcToTest(1, 2);
			if(n !== 3) {
				throw new Error("Should be 3!");
			};
		});
	});
});
