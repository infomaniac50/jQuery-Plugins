(function ($) {

    var defaults = {
        cursor: 'crosshair',
        callback: function () {
            return false;
        }
    };

    var methods = {
        item: function (options) {
            var $options = $.extend({}, defaults, options);

            this.addClass('dragclient-item not-dropped');
            this.data('dragclient-data', $options);

            this.draggable({
                cursor: $options.cursor
            });
        },
        client: function () {
            this.droppable({
                accept: '.dragclient-item.not-dropped',
                drop: function (event, ui) {
                    var data = $(ui.draggable).data('dragclient-data');
                    var clone = $(ui.helper).clone();
                    clone.removeClass('ui-draggable not-dropped');
                    clone.addClass('dropped');
                    clone.draggable({
                        containment: 'parent',
                        cursor: data.cursor
                    });

                    $(this).append(clone);
                    var callback = data.callback;
                    if (typeof (callback) === 'function') {
                        callback(clone);
                    }
                }
            });
        }
    };


    var checkjqueryui = function () {
        if (jQuery.ui) {
            return true;
        }
        else {
            return false;
        }
    };

    $.fn.dragclient = function (method) {
        if (checkjqueryui()) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.dragclient');
            }
        }
    };

})(jQuery);
