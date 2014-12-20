//  Type `npm install` from this directory

module.exports = function(grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: { // npmjs.com/package/grunt-contrib-concat
      options: {
        banner: '[\n',
        footer: ']',
      },
      gravity: {
        src: ['theme_source/base.json', 'theme_source/gravity.json'],
        dest: 'export/Gravity.sublime-theme',
      },
      reverse: {
        src: ['theme_source/base.json', 'theme_source/r_gravity.json'],
        dest: 'export/Reverse Gravity.sublime-theme',
      },
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      concat: {
        files: ['theme_source/*.json'],
        tasks: ['concat', 'notify:concat'],
      },
    },

    notify: {
      concat: {
        options: {
          message: 'Concatenation finished, no errors!',
        },
      },
    }

  }); // end jSON

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s)
  grunt.registerTask('default', ['concat', 'watch']);

};