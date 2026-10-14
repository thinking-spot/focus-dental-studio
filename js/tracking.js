document.addEventListener('click', function (event) {
  var link = event.target.closest && event.target.closest('a[href^="tel:"], a[href^="sms:"]');
  if (!link) return;

  var isCall = link.getAttribute('href').indexOf('tel:') === 0;

  gtag('event', isCall ? 'phone_click' : 'sms_click', {
    link_text: link.textContent.trim().replace(/\s+/g, ' '),
    transport_type: 'beacon'
  });
});
