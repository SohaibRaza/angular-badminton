cordova.define("cordova-plugin-open-in-browser.OpenInBrowser", function(require, exports, module) {
var exec = require('cordova/exec');

var PLUGIN_NAME = "OpenInBrowser"; // This is just for code completion uses.

var OpenInBrowser = function() {}; // This just makes it easier for
// us to export all of the functions at once.
// All of your plugin functions go below this. 
OpenInBrowser.openUrl = function(url, onSuccess, onError) {
   console.log(url, onSuccess, onError)
   exec(onSuccess, onError, PLUGIN_NAME, "openUrl", [url]);
};
module.exports = OpenInBrowser;
});
