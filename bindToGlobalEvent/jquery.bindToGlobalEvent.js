(function ($) {

$.fn.bindToGlobalEvent = function(eventName, func) {
   $(app.eventHolder).bind(eventName, this, function(e) { func.call(e.data);
});
    
})(jQuery);