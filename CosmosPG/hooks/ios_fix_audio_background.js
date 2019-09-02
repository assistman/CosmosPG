#!/usr/bin/env node

var fs = require("fs");
var find = require("find");
var colors = require("colors");
var path = __dirname + "/../platforms/ios/";

find.file(/\-Info\.plist$/, path, function(files) {
    if(files.length > 1) {
        console.log("Multiple possible plist files found".red);
        process.exit(1);
    } else if(files.length === 0) {
        console.log("No info plist found".red);
        process.exit(1);
    } else {
        var plistpath = files[0];

        /**
         * Determine app name
         */
        var appname = plistpath.match(/([^\/\\]+)(\/|\\)[^\/\\]+$/)[1];

        /**
         * Modify plist
         */
        var plist = fs.readFileSync(plistpath, "utf8");
        plist = plist.replace(/\s+<string>audio<\/string>/, "");

        fs.writeFile(plistpath, plist, function(err) {
            if(err) {
                console.log("Failed to remove Audio from Background Modes in Capabilities".red);
                throw err;
            } else {
                console.log("Removed Audio from Background Modes in Capabilities and wrote to plist file".green);
            }
        });
    }
});