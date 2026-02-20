(function () {
  var el = document.getElementById('visit-count');
  if (!el) return;

  // Local-only counter (per browser/device)
  var TOTAL_KEY = 'abrb-local-total';
  var SESSION_FLAG = 'abrb-counted-site';

  try {
    var counted = sessionStorage.getItem(SESSION_FLAG) === '1';
    var total = parseInt(localStorage.getItem(TOTAL_KEY), 10);
    if (isNaN(total)) total = 0;

    if (!counted) {
      total += 1;
      localStorage.setItem(TOTAL_KEY, String(total));
      sessionStorage.setItem(SESSION_FLAG, '1');
    }

    el.textContent = Number(total).toLocaleString();
  } catch (e) {
    el.textContent = '—';
  }
})();
