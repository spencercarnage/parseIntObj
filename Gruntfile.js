module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      parseIntObj: {
        dest: 'build/parseIntObj-min.js',
        src: ['src/parseIntObj.js']
      },
      parseIntCloneDeep: {
        dest: 'build/parseIntCloneDeep-min.js',
        src: ['src/parseIntCloneDeep.js']
      }
    },
    jshint: {
      all: ['src/parseIntObj.js', 'src/parseIntCloneDeep.js', 'tests/**/*.js']
    },
    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:800/tests/runner.html',
            'http://localhost:800/tests/lodash-runner.html'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "qunit" task.
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);

  grunt.registerTask('test', ['connect', 'qunit']);

};

