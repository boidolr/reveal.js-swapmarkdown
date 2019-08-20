(function( root, factory ) {
    if (typeof define === 'function' && define.amd) {
        root.RevealSwapMarkdown = factory();
    } else if( typeof exports === 'object' ) {
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.RevealSwapMarkdown = factory();
    }
}( this, function() {
    var RevealSwapMarkdown ={
        init: function() {
            // Read the plugin config options and provide fallbacks
            var config = Reveal.getConfig().swapmarkdown || {};
            config.slidesPrefix = typeof config.slidesPrefix === 'string' ? config.slidesPrefix : 'slides/';
            config.slidesPostfix = typeof config.slidesPostfix === 'string' ? config.slidesPostfix : '.md';
            config.slidesRegEx = config.slidesRegEx instanceof RegExp ? config.slidesRegEx : /slides=(\w+)/i;

            // Swap in presentation if requested:
            var locationMatch = window.location.search.match(config.slidesRegEx);
            if (locationMatch) {
                document.querySelector('section[data-markdown]')
                  .setAttribute('data-markdown', config.slidesPrefix + locationMatch[1] + config.slidesPostfix);
            }
            Reveal.addEventListener('ready', function(event) {
                document.title = document.querySelector('section[data-markdown-parsed] h1').innerText;
            });
        }
    }
    Reveal.registerPlugin('swapmarkdown', RevealSwapMarkdown);
    return RevealSwapMarkdown;
}));
