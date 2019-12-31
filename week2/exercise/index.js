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
            for (var i = 0; i < arguments[0].value.length; i++){
                this.value = this.value.concat(arguments[0].value[i]);
            }
        } else {
            this.value.push(arguments[0]);
        }
    }
}

Collection.prototype.count = function() {
    return this.value.length;
}

// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    var collection = new Collection();
    if((arguments.length > 0) && !(arguments.length === 0)){
        for (var i = 0; i < arguments.length; i++){
            collection.value = collection.value.concat(arguments[i]);
        }
    }
    return collection;
}
