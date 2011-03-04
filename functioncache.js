//probably not useful for anything I can think of.
//unless you have a long running function
//Saved it just in case
//Caches a function result
//function must be global

var checkedonce = {};

var checkonce = function (name) {
    var func = window[name];

    if (typeof checkedonce[name] !== 'undefined' && checkedonce[name] != null) {
        return checkedonce[name];
    }
    else if (typeof func === 'function') {
        return checkedonce[name] = func();
    }
    else {
        $.error(name + " is not a valid function name.");
        return null;
    }
};
