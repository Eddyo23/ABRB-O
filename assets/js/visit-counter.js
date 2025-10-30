(function () {
    var el = document.getElementById('visit-count');
    if (!el) return;
  
    // One total counter for the whole site
    var NAMESPACE = 'abrb-smd';
    var KEY = 'site-total';
  
    // Count once per browser session (prevents refresh spam)
    var FLAG = 'abrb-counted-site';
    var counted = sessionStorage.getItem(FLAG) === '1';
  
    var url = counted
      ? 'https://api.countapi.xyz/get/' + NAMESPACE + '/' + KEY
      : 'https://api.countapi.xyz/hit/' + NAMESPACE + '/' + KEY;
  
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!counted) sessionStorage.setItem(FLAG, '1');
        el.textContent = Number(d.value).toLocaleString();
      })
      .catch(function () { el.textContent = '—'; });
  })();