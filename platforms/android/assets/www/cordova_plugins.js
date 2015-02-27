cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.flashlight/www/Flashlight.js",
        "id": "nl.x-services.plugins.flashlight.Flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.console": "0.2.13",
    "nl.x-services.plugins.flashlight": "2.0.2"
}
// BOTTOM OF METADATA
});