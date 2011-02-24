(function ($) {
    $.fn.isChildOf = function (ancestor) {
        $(this).filter(function () {
            return $(this).parents().is(ancestor);
        });
    };
})(jQuery);