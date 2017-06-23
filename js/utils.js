// ======================= DOM Utility Functions from PastryKit =============================== //

// Sure, we could use jQuery or XUI for these, 
// but these are concise and will work with plain vanilla JS

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};

// ======================= DDD mini framework =============================== //

(function(){



var DDD = {};
// again, borrowed from PastryKit
DDD.isTangible = !!('createTouch' in document);
DDD.CursorStartEvent = DDD.isTangible ? 'touchstart' : 'mousedown';
DDD.CursorMoveEvent = DDD.isTangible ? 'touchmove' : 'mousemove';
DDD.CursorEndEvent = DDD.isTangible ? 'touchend' : 'mouseup';

// get i.e. 'WebkitTransform'
var transformProp = Modernizr.prefixed('transform');

})();