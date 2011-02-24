(function ($) {

    var updatedocumentwindow = function () {
        zoomtarget.hide();
        target.width('');
        target.width(target.width());
        zoomtarget.show();
    };

    var updatecontrolsonzoom = function (target, children, factor) {
        $(children).each(function () {

            var control = $(this);
            var x = control.position().left;
            var y = control.position().top;
            x += target.scrollLeft();
            y += target.scrollTop();

            x *= factor;
            y *= factor;

            control.css({ 'left': x + 'px', 'top': y + 'px' });

        });
    }

    var updatedocumentzoom = function (target, size, zoom) {
        target.width(size.width * zoom);
        target.height(size.height * zoom);
    };

    var defaults = {
        factor: 1.25,
        size: { width: 0, height: 0 }
    };




    var methods = {
        init: function (options) {
            var target = $(this);
            var data = $.extend(true, {}, defaults);

            if (typeof options !== 'undefined' && options != null) {
                if (typeof options.factor !== 'undefined' && options.factor != null) {
                    data.factor = options.factor;
                }

                if (typeof options.children !== 'undefined' && options.children != null) {
                    data.children = options.children;
                }

                if (typeof options.container !== 'undefined' && options.container != null) {
                    data.container = options.container;
                }
                else {
                    target.parent().append($('<div/>').addClass('multizoomcontainer'))
                    $('div.multizoomcontainer').append(target);
                }
            }
            data.size.width = target.width();
            data.size.height = target.height();

            target.data('zoomdata', data);
        },

        increase: function () {
            zoom = zoom * 1.25;
            updatedocumentzoom();
            updatecontrolsonzoom(1.25);

        },
        decrease: function () {

        }
    };

    $.fn.multizoom = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.zoom');
        }
    };
})(jQuery);