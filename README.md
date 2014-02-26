# Java Gradle Presentation

This is a fork of the brilliant
[reveal.js](https://github.com/hakimel/reveal.js), styled using an Iterate
theme.

An on-line CEO-friendly editor exists at [slid.es](http://slid.es/), and can be
used to produce markup that can be fitted into this theme by editing
**index.html**.

Relevant documentation:

* [markdown contents](https://github.com/hakimel/reveal.js#markdown)
* [speaker notes](https://github.com/hakimel/reveal.js#speaker-notes)
* [JavaScript API](https://github.com/hakimel/reveal.js#api)
* [Examples](https://github.com/hakimel/reveal.js/wiki/Example-Presentations)

## Extra Custom Special Stuff

### Inverted style

Add `data-state="inverted"` to the slide `<section>` tag, and you'll get nice,
blue slides.

### PDF Export

Presentations can be exported to PDF via a special print stylesheet and
phantomjs.

Run `grunt mkpdf` and look for the slides.pdf file.

**Notice**: This requires that you run `npm install` to download and install
dependencies, which again depends on [NodeJs](http://nodejs.org/download) being
installed on your system.


## Changes in this fork

- The Iterate style theme, including an "inverted" state.
- Use the GitHub highlight.js style instead of Zenburn.
- In the reveal.js file: do not add class from data-state when in printPdf
  mode.
- Use grunt-sass instead of grunt-contrib-sass to get rid of ruby dependency.
- PhanomJS dependency and an package.json script directive to export to pdf
  using the print-pdf plugin.
- Modify print-pdf plugin to be a grunt task.


## License

MIT licensed

Copyright (C) 2013 Pål Ruud, http://ruudud.github.com
Copyright (C) 2013 Hakim El Hattab, http://hakim.se
