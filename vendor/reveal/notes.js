(() => {
  "use strict";

  // Keep Reveal Notes and slide-block loading in one deterministic chain.
  // notes-original.js loads slides 41–80 in numerical order.
  document.write('<script src="vendor/reveal/notes-original.js"><\/script>');
})();
