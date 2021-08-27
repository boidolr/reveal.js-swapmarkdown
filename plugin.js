RevealSwapMarkdown = {
    id: 'swapmarkdown',
    init: function(reveal) {
         var config = reveal.getConfig().swapmarkdown || {};
            const slidesPrefix = typeof config.slidesPrefix === 'string' ? config.slidesPrefix : 'slides/';
            const slidesPostfix = typeof config.slidesPostfix === 'string' ? config.slidesPostfix : '.md';
            const slidesRegEx = config.slidesRegEx instanceof RegExp ? config.slidesRegEx : /slides=(\w+)/i;

            // Swap in presentation if requested:
            var locationMatch = window.location.search.match(slidesRegEx);
            if (locationMatch) {
                reveal.getRevealElement().querySelector('section[data-markdown]')
                  .setAttribute('data-markdown', `${slidesPrefix}${locationMatch[1]}${slidesPostfix}`);
            }
            document.addEventListener('ready', function(event) {
                document.title = document.querySelector('section[data-markdown-parsed] h1').innerText;
            });
    }
}

export default RevealSwapMarkdown;
