var fs = require('fs');

module.exports = function (context) {
  // Get the contents of the platform build script.
  var build = fs.readFileSync('platforms/ios/cordova/lib/build.js', 'utf8');
  
  /**
   * Search for 
   * .xcworkspace', 'project.pbxproj'
   * Replace with
   * .xcodeproj’, ‘project.pbxproj’
   */
  var replace = build.replace(/\.xcworkspace',\'sproject\.pbxproj'/g, ".xcodeproj', 'project.pbxproj'");
  
  /**
   * Save reverted modifications.
   */
  fs.writeFileSync('platforms/ios/cordova/lib/build.js', replace);
};