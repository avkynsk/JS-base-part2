var assert = require('assert');

var Collection = require('./index');

var numbers = new Collection();
numbers.append(10);
numbers.append(20);

assert.equal(numbers.count(), 2);
assert.deepEqual(numbers.values(), [10, 20]);