/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
  var path = require('path');
  var childProcess = require('child_process');

  var phantomjsBin = require('phantomjs').path;

  grunt.registerTask('mkpdf', 'Creates PDF using PhantomJS', function () {
    var options = this.options({
      source: './index.html?print-pdf',
      target: 'slides.pdf'
    });

    var args = [
      path.join(__dirname, 'util/print-pdf.js'),
      options.source,
      options.target
    ];

    var done = this.async();

    childProcess.execFile(phantomjsBin, args, function(err, stdout, stderr) {
      if (err) {
        grunt.log.errorlns('PhantomJS:', err);
        done(false);
      }
      grunt.log.oklns(stdout);
      done();
    });
  });

};
