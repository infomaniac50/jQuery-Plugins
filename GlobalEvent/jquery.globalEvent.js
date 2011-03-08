(function ($) {

    var eventHolder = {};

    $.fn.globalEvent = {
        bind: function (eventName, func) {
            $(eventHolder).bind(eventName, this, function (e) {
                func.call(e.data);
            });
        }
    };

    $.extend({
        globalEvent: {
            trigger: function (eventName) {
                $(eventHolder).trigger(eventName);
            }
        }
    });

})(jQuery);