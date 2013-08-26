'use strict';

module.exports = function (grunt) {

  var path = require('path');
  var childProcess = require('child_process');

  var phantomjsBin = require('phantomjs').path;

  grunt.registerTask('mkpdf', 'Creates PDF using PhantomJS', function () {
    var done = this.async();
    
    var options = this.options({
      source: 'http://localhost:8000/index.html?print-pdf',
      target: 'slides.pdf'
    });

    var args = [
      path.join(__dirname, 'util/print-pdf.js'),
      options.source,
      options.target
    ];

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
