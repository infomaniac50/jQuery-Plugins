(
function ($) {
    var toggle = function () {

    };

    var show = function () {

    };

    var hide = function () {

    }

    var defaults = {
        text: "",
        icon: "",
        background: "#CECECE",
        color: "#000",
        showing: true
    };

    var methods = {
        'init': function (options) {
            var settings = {};
            if (options)
                $.extend(true, settings, defaults, options);
            else
                $.extend(true, settings, defaults);

            var placeholder = $("<div/>").css({
                'background-color': settings.background,
                'color': settings.color
            });

            placeholder.addClass("placeholder-content");

            if (settings.text !== "") {
                placeholder.text(text);
            }

            if (settings.icon !== "") {
                placeholder.prepend($("<img/>").attr({
                    'src': settings.icon,
                    'alt': "Placeholder Icon"
                }));
            }

            this.each(function () {
                var control = $(this);
                var $placeholder = placeholder.clone();

                control.after($placeholder);
                if (settings.showing) {
                    $placeholder.show();
                    control.hide();
                }
                else {
                    $placeholder.hide();
                    control.show();
                }

                control.data('placeholder-reference', $placeholder);
            });

            return this;
        },
        'toggle': function () {
            this.each(function () {
                var control = $(this);
                var placeholder = control.data('placeholder-reference');

                control.toggle()
                placeholder.toggle();
            });
        },
        'show': function () {
            this.each(function () {
                var control = $(this);
                var placeholder = control.data('placeholder-reference');

                control.hide();
                placeholder.show();
            });
        },
        'hide': function () {
            this.each(function () {
                var control = $(this);
                var placeholder = control.data('placeholder-reference');

                control.show();
                placeholder.hide();
            });
        }
    };

    var show = function (control, placeholder) {

    };

    var hide = function (control, placeholder) {

    };

    var toggle = functio(control, placeholder)
    {

    };

    $.fn.placeholder = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.placeholder');
        }
    };
}
)(jQuery);