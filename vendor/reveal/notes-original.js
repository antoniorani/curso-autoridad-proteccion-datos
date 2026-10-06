(() => {
  "use strict";
  // Load-order contract: speaker-gallery.js has already appended slides 21–40.
  // These scripts append 41–82 synchronously before Reveal.initialize().
  document.write('<script src="vendor/reveal/notes-core.js"><\/script>');
  document.write('<script src="slides-41-50.js"><\/script>');
  document.write('<script src="slides-45-46-fines.js"><\/script>');
  document.write('<script src="slides-51-60.js"><\/script>');
  document.write('<script src="slides-61-70.js"><\/script>');
  document.write('<script src="slides-71-80.js"><\/script>');
})();
