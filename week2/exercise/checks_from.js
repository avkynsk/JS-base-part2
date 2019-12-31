var assert = require('assert');

var Collection = require('./index');

var letters = Collection.from(['a', 'b', 'c']);
letters.append('d');

assert.equal(letters.count(), 4);
assert.deepEqual(letters.values(), ['a', 'b', 'c', 'd']);