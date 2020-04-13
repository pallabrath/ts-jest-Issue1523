module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var pkgJson = require('./package.json');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-typescript');

  grunt.initConfig({
    clean: ['dist'],
    typescript: {
      build: {
        src: ['src/**/*.ts', '!**/*.test.ts'],
        dest: 'dist',
        options: {
          module: 'system',
          target: 'es5',
          rootDir: 'src',
          sourceMap: false
        }
      }
    }
  });
  grunt.registerTask('default', [
    'clean',
    'typescript:build'
  ]);
};
