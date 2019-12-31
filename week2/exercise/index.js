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

Collection.prototype.append = function(element) {
    this.value.push(element);
}

Collection.prototype.count = function() {
    return this.value.length;
}

// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {}
