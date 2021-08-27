# reveal.js-swapmarkdown

Reveal.js plugin to swap in external markdown slides from query parameters, allowing different markdown decks to exist next to each other.

## Installation

Copy this repository into the plugins folder of your reveal.js presentation, ie `plugin/swapmarkdown`.

Add the plugin to the dependencies in your presentation before the markdown plugins, as below.

```html
<script src="plugin/animate/plugin.js"></script>
<script src="plugin/markdown/markdown.js"></script>

<script>
    Reveal.initialize({
        // ...
        plugins: [
            RevealSwapMarkdown,
            RevealMarkdown
        ],
        // ...
    });
</script>
```

## Usage

Setup your presentation for markdown slides as described in the reveal.js [documentation](https://revealjs.com/markdown/):

```html
<body>
    <div class="reveal">
        <div class="slides">
            <section data-markdown data-separator="^\n\n\n" data-separator-vertical="^\n\n" data-separator-notes="^Note:"/>
                <!-- External markdown will be loaded here. -->
            </section>
        </div>
    </div>
</body>
```

Different slide decks can be loaded by adding them to the URL of the presentation, ie [http://localhost:8000?slides=example](http://localhost:8000?slides=example) (for external markdown to work the [full setup](https://github.com/hakimel/reveal.js#full-setup) needs to be used).

## Configuration

You can customize loading with parameters in your configuration.

```javascript
Reveal.initialize({
    // ...
    swapmarkdown: {
        // Prefix for the slide identifier, such as the base path to load the slides from
        slidesPrefix: 'slides/',
        // Postfix for the slide identifier, such as the file extension
        slidesPostfix: '.md',

        // Regular expression to match the slide file name from
        slidesRegEx: /slides=(\w+)/i
    }
});
```

## License

[MIT licensed](https://en.wikipedia.org/wiki/MIT_License).

Copyright (C) 2019 [Raphael Boidol](https://github.com/boidolr)
