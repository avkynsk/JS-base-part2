module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.value = [];
}


// Методы коллекции
Collection.prototype.values = function() {
    return this.value;
}

Collection.prototype.append = function() {
    if(!(arguments.length === 0)) {
        if(Array.isArray(arguments[0].value))
        {
            arguments[0].value.forEach(element => this.value = this.value.concat(element));
            
        } else {
            this.value.push(arguments[0]);
        }
    }
}

Collection.prototype.count = function() {
    return this.value.length;
}

Collection.prototype.at = function() {
    if ((arguments[0] <= 0) || (typeof arguments[0] !== 'number') || (arguments[0] > this.value.length)) {
        return null;
    } else {
        return this.value[arguments[0] - 1];
    }
}

// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    var collection = new Collection();
    if((arguments[0].length > 0))
        arguments[0].forEach(element => collection.value = collection.value.concat(element));
    return collection;
}
