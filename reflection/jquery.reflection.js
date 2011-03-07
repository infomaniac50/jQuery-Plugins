(
function ($) {
    var isNull = function (object) {
        return typeof (object) === 'undefined' || object == null;
    };

    var isString = function (object) {
        return !isNull(object) && typeof (object) === 'string';
    };

    var isObject = function (object) {
        return !isNull(object) && typeof (object) === 'object';
    };

    var isJquery = function (object) {
        return isObject(object) && object.jquery;
    };

    var isElement = function (object) {
        return isObject(object) && (object.tagName || object.nodeName);
    };
    
    var methods = {
        'isNull': isNull,
        'isString':isString,
        'isObject':isObject,
        'isNode':isElement,
        'isjQuery':isJquery
    };

    $.extend({ 'reflection': methods });


}
)(jQuery);