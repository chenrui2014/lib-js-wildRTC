var WildRTCProxy = require('./WildRTCProxy.js');
var WildRTCDirect = require('./WildRTCDirect.js');

var WildRTC = function(ref, type) {
    if (type == 'o2m') {
        this.wildRTC = new WildRTCProxy(ref, type);
    } else if ('m2m') {
        this.wildRTC = new WildRTCDirect(ref);
    } else {
        console.error("type wrong!");
    }
}

WildRTC.prototype.join = function(callback) {
    this.wildRTC.join(callback);
};

WildRTC.prototype.leave = function(leave) {
    this.wildRTC.leave();
}

WildRTC.prototype.getLocalStream = function(options, callback, cancelCallback) {
    this.wildRTC.getLocalStream(options, callback, cancelCallback);
}

WildRTC.prototype.addStream = function(wildStream) {
    this.wildRTC.addStream(wildStream);
}

WildRTC.prototype.removeStream = function() {
    this.wildRTC.removeStream();
}

WildRTC.prototype.on = function(string, callback, cancelCallback) {
    this.wildRTC.on(string, callback, cancelCallback);
}

WildRTC.prototype.off = function(string) {
    this.wildRTC.off(string);
}

window.WildRTC = WildRTC;
