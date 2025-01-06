var assert = require('assert');
const { describe } = require('mocha');
const calculateNumber  = require('../1-calcul');

describe('add function', () => {
    it('should add ', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
         
    });

    it('should sub ', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
         
    });
    it('should mult ', () => {
        assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 4.5), 5)
         
    });

    it('should divide ', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Infinity')
         
    });
})