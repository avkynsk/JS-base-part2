var assert = require('assert');

var Collection = require('./index');

var numbers = new Collection();
numbers.append(10);
numbers.append(20);

var letters = Collection.from(['a', 'b', 'c']);
letters.append('d');

var items = new Collection();
items.append(numbers);
items.append(letters);

assert.equal(items.removeAt(0), false);
assert.equal(items.removeAt(2), true);
assert.equal(items.removeAt(5), true);

assert.deepEqual(items.values(), [10, 'a', 'b', 'c']);