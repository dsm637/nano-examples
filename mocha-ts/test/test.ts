import TM = require("../testModule");

declare var describe: (s: any, f: () => void) => void;
declare var it: (s: any, f: () => void) => void;

describe('testModule.ts', function () {
    describe('funcToTest', function () {
        it('The function should return sum of two intereg', function () {
			var n = TM.funcToTest(1, 2);
			if(n !== 3) {
				throw new Error("Should be 3!");
			};
		});
	});
});
