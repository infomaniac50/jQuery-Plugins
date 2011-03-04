(function ($) {


    var defaults = {
        zoom: 1.00,
        factor: 1.25,
        size: { width: 0, height: 0 }
    };

    var $options = {};


    var isjQuery = function (object) {
        return object instanceof jQuery;
    }

    var reposition = function (oldzoom, newzoom) {
        var control = $(this);
        var container = control.parent();
        var factor = newzoom / oldzoom;

        var x = control.position().left;
        var y = control.position().top;
        x += container.scrollLeft();
        y += container.scrollTop();

        x *= factor;
        y *= factor;

        control.css({ 'left': x + 'px', 'top': y + 'px' });
    };

    var $console = {
        exists: function () {
            return $.type(console) !== 'undefined' && $.type(console) !== 'null';
        },
        warn: function (message) {
            if ($console.exists()) {
                console.warn(message);
            }
        },
        log: function (message) {
            if ($console.exists()) {
                console.log(message);
            }
        },
        error: function (message) {
            $.error(message);
        }
    };

    var methods = {
        init: function () {
            var options = $.extend(true, {}, defaults);

            options.size.width = this.width();
            options.size.height = this.height();

            this.data(options);
        },
        repositionOnZoom: function () {
            this.addClass('multizoom-reposition');
            this.each(function () {
                $(this).bind('multizoom-onzoom', $.proxy(reposition, this));
            });

            return this;
        },
        absolute: function (zoom) {
            var container = this.parent();
            var data = container.data();
            var oldzoom = data.zoom;
            data.zoom = zoom;
            var newzoom = data.zoom;

            this.width(data.size.width * data.zoom);
            this.height(data.size.height * data.zoom);

            $('.multizoom-reposition').trigger('multizoom-onzoom', [oldzoom, newzoom]);
            return this;
        },
        relative: function (factor) {
            var container = this.parents('.multizoom-container');
            var data = container.data();

            return methods.absolute(data.zoom * factor);
        },
        inverse: function (factor) {
            factor = 1 / factor;
            return methods.relative(factor);
        }
    };

    $.fn.multizoom = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.multizoom');
        }
    };
})(jQuery);