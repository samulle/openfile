var exec = require('cordova/exec');

exports.open = function(arg0, success, error) {
    exec(success, error, "openFile", "", [arg0]);
};
