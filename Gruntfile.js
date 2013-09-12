/*jshint node:true*/
'use strict';

module.exports = function(grunt) {

  // Load dependencies specified in package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  // … and in the `tasks` directory
  grunt.loadTasks('tasks');

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
        '/*!\n' +
        ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * http://lab.hakim.se/reveal-js\n' +
        ' * MIT licensed\n' +
        ' *\n' +
        ' * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n' +
        ' */'
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        src: 'js/reveal.js',
        dest: 'js/reveal.min.js'
      }
    },

    cssmin: {
      compress: {
        files: { 'css/reveal.min.css': [ 'css/reveal.css' ] }
      }
    },

    sass: {
      main: {
        files: {
          'css/theme/default.css': 'css/theme/source/default.scss',
          'css/theme/beige.css': 'css/theme/source/beige.scss',
          'css/theme/night.css': 'css/theme/source/night.scss',
          'css/theme/serif.css': 'css/theme/source/serif.scss',
          'css/theme/simple.css': 'css/theme/source/simple.scss',
          'css/theme/sky.css': 'css/theme/source/sky.scss',
          'css/theme/moon.css': 'css/theme/source/moon.scss',
          'css/theme/iterate.css': 'css/theme/source/iterate.scss',
          'css/theme/solarized.css': 'css/theme/source/solarized.scss'
        }
      }
    },

    jshint: {
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          head: false,
          module: false,
          console: false
        }
      },
      files: [ 'Gruntfile.js', 'js/reveal.js' ]
    },

    connect: {
      server: {
        options: {
          livereload: true,
          port: 8000,
          base: '.'
        }
      }
    },

    open: {
      dev: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    },

    zip: {
      'reveal-js-presentation.zip': [
        'index.html',
        'css/**',
        'js/**',
        'lib/**',
        'images/**',
        'plugin/**'
      ]
    },

    mkpdf: {
      options: {
        source: './index.html?print-pdf'
      }
    },

    watch: {
      nodescripts: {
        files: [ 'Gruntfile.js', 'tasks/**/*.js' ],
        tasks: [ 'jshint' ]
      },
      main: {
        files: [ 'js/reveal.js', 'css/reveal.css' ],
        tasks: 'default'
      },
      theme: {
        files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
        tasks: 'themes'
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'index.html',
          'js/{,*/}*.js',
          'css/{,*/}*.css',
          'gfx/{,*/}*.{png,jpg,jpeg,gif,webp}'
        ]
      }
    }

  });

  // Default task
  grunt.registerTask('default', [ 'jshint', 'cssmin', 'uglify' ]);

  // Theme task
  grunt.registerTask('themes', [ 'sass' ]);

  // Package presentation to archive
  grunt.registerTask('package', [ 'default', 'zip' ]);

  // Serve presentation locally
  grunt.registerTask('serve', [ 'connect', 'open', 'watch' ]);

};
