(function ($) {
    $.fn.isChildOf = function (ancestor) {
        return $(this).filter(function () {
            return $(this).parents().is(ancestor);
        });
    };
})(jQuery);