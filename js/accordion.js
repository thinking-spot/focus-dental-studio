(function () {
  function openTarget(hash) {
    var id = decodeURIComponent(hash.replace(/^#/, ''));
    var el = id && document.getElementById(id);
    if (el && el.tagName === 'DETAILS') el.open = true;
  }

  openTarget(location.hash);
  window.addEventListener('hashchange', function () { openTarget(location.hash); });

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href^="#"]');
    if (link) openTarget(link.getAttribute('href'));
  });
})();
