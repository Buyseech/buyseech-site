// Scroll reveal: sections below the fold fade and rise gently into view.
// Anything already on screen is never hidden, and nothing is hidden without JavaScript
// or for visitors who ask their device to reduce motion.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var items = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-hidden');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
  Array.prototype.forEach.call(items, function (el) {
    if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
      el.classList.add('is-hidden');
      io.observe(el);
    }
  });
})();

// Review form: posts to a form service when data-endpoint is set on the form.
// With no endpoint (or no JavaScript) the form falls back to opening the visitor's email app.
(function () {
  var form = document.getElementById('review-form');
  if (!form) return;
  var endpoint = form.getAttribute('data-endpoint');
  if (!endpoint) return;

  var status = document.getElementById('form-status');
  var button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.elements.botcheck && form.elements.botcheck.value) return; // spam trap

    button.disabled = true;
    status.textContent = 'Sending…';

    fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        form.reset();
        status.textContent = 'Thank you. Igor will look at your site and reply by email.';
      })
      .catch(function () {
        status.textContent = 'Something went wrong. Please email office@buyseech.com instead.';
      })
      .then(function () {
        button.disabled = false;
      });
  });
})();
