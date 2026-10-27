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
