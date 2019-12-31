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

console.log(items.values());
console.log(items.at(0), items.at(1), items.at(3), items.at(6));