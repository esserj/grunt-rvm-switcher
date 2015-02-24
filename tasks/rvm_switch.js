/*
 * grunt-rvm-switcher
 * https://github.com/janesser/grunt-rvm-switcher
 *
 * Copyright (c) 2015 Jan Esser
 * Licensed under the MIT license.
 */

'use strict';
var execSync = require("execSync");

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('rvm_switch', 'Grunt plugin to allow Ruby Virtual Machine switching through grunt configuration', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            ruby_version: '2.1.2',
            virtual_machine: 'styleguide-1.0',
            rvm_path: '$HOME/.rvm/scripts/rvm'
        });

        var result = execSync.exec( options.rvm_path + ' ' + options.ruby_version + '@' + options.virtual_machine);

        if (result.code == 0) {
            grunt.log.ok('RVM is now running on ' + options.ruby_version + '@' + options.virtual_machine);
        } else {
            grunt.warn(
                'Something failed when running rvm, make sure your rvm_path is set correctly and that you are ' +
                     'switching to an existing ruby virtual machine. \n\n' + result.stdout
            );
        }

        /*// Iterate over all specified file groups.
        this.files.forEach(function(f) {
          // Concat specified files.
          var src = f.src.filter(function(filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            } else {
              return true;
            }
          }).map(function(filepath) {
            // Read file source.
            return grunt.file.read(filepath);
          }).join(grunt.util.normalizelf(options.separator));

          // Handle options.
          src += options.punctuation;

          // Write the destination file.
          grunt.file.write(f.dest, src);

          // Print a success message.
          grunt.log.writeln('File "' + f.dest + '" created.');
        });*/
    });
};
