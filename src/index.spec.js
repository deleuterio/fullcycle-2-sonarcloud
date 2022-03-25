const { testingSum, testingMultiply } = require('./index');

describe('Testing math operations', () => {
    const a = 2;
    const b = 2;
    it('2 + 2', () => {
        expect(testingSum(a, b)).toBe(4);
    });

    it('2 * 2', () => {
        expect(testingMultiply(a, b)).toBe(4);
    });
});