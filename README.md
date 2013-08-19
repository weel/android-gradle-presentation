# reveal.js with Iterate theme 

This is a fork of the brilliant
[reveal.js](https://github.com/hakimel/reveal.js), styled using an Iterate
theme.

Relevant documentation:

* [markdown contents](https://github.com/hakimel/reveal.js#markdown)
* [PDF export](https://github.com/hakimel/reveal.js#pdf-export)
* [speaker notes](https://github.com/hakimel/reveal.js#speaker-notes)
* [JavaScript API](https://github.com/hakimel/reveal.js#api)
* [Examples](https://github.com/hakimel/reveal.js/wiki/Example-Presentations)

## Instructions

### Markup

Markup hierarchy needs to be ``<div class="reveal"> <div class="slides">
<section>`` where the ``<section>`` represents one slide and can be repeated
indefinitely. If you place multiple ``<section>``'s inside of another
``<section>`` they will be shown as vertical slides. The first of the vertical
slides is the "root" of the others (at the top), and it will be included in the
horizontal sequence. For example:

```html
<div class="reveal">
	<div class="slides">
		<section>Single Horizontal Slide</section>
		<section>
			<section>Vertical Slide 1</section>
			<section>Vertical Slide 2</section>
		</section>
	</div>
</div>
```

### Fragments
Fragments are used to highlight individual elements on a slide. Every element with the class ```fragment``` will be stepped through before moving on to the next slide. Here's an example: http://lab.hakim.se/reveal-js/#/16

The default fragment style is to start out invisible and fade in. This style can be changed by appending a different class to the fragment:

```html
<section>
	<p class="fragment grow">grow</p>
	<p class="fragment shrink">shrink</p>
	<p class="fragment roll-in">roll-in</p>
	<p class="fragment fade-out">fade-out</p>
	<p class="fragment highlight-red">highlight-red</p>
	<p class="fragment highlight-green">highlight-green</p>
	<p class="fragment highlight-blue">highlight-blue</p>
</section>
```

Multiple fragments can be applied to the same element sequentially by wrapping it, this will fade in the text on the first step and fade it back out on the second.

```html
<section>
	<span class="fragment fade-in">
		<span class="fragment fade-out">I'll fade in, then out</span>
	</span>
</section>
```

The display order of fragments can be controlled using the ```data-fragment-index``` attribute.

```html
<section>
	<p class="fragment" data-fragment-index="3">Appears last</p>
	<p class="fragment" data-fragment-index="1">Appears first</p>
	<p class="fragment" data-fragment-index="2">Appears second</p>
</section>
```

### Code syntax highlighting

By default, Reveal is configured with
[highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for code syntax
highlighting. Below is an example with clojure code that will be syntax
highlighted. When the `data-trim` attribute is present surrounding whitespace
is automatically removed.

```html
<section>
	<pre><code data-trim>
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
	</code></pre>
</section>
```

### Fullscreen mode

Just press »F« on your keyboard to show your presentation in fullscreen mode.
Press the »ESC« key to exit fullscreen mode.


## PDF Export

Presentations can be exported to PDF via a special print stylesheet. This
feature requires that you use [Google Chrome](http://google.com/chrome).
Here's an example of an exported presentation that's been uploaded to
SlideShare: http://www.slideshare.net/hakimel/revealjs-13872948.

1. Open your presentation with
   [css/print/pdf.css](https://github.com/hakimel/reveal.js/blob/master/css/print/pdf.css)
   included on the page. The default index HTML lets you add *print-pdf*
   anywhere in the query to include the stylesheet, for example:
   [lab.hakim.se/reveal-js?print-pdf](http://lab.hakim.se/reveal-js?print-pdf).
2. Open the in-browser print dialog (CMD+P).
3. Change the **Destination** setting to **Save as PDF**.
4. Change the **Layout** to **Landscape**.
5. Change the **Margins** to **None**.
6. Click **Save**.

![Chrome Print Settings](https://s3.amazonaws.com/hakim-static/reveal-js/pdf-print-settings.png)


## License

MIT licensed

Copyright (C) 2013 Hakim El Hattab, http://hakim.se
