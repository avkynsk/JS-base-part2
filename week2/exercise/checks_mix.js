var assert = require('assert');

var Collection = require('./index');

var numbers = new Collection();
numbers.append(3465);
numbers.append(324);

var letters = Collection.from();
letters.append('f');

var items = new Collection();
items.append();
items.append(letters);

//assert.equal(items.count(), 6);
console.log(items.count());
console.log(items.values());
//assert.deepEqual(items.values(), [10, 20, 'a', 'b', 'c', 'd']);