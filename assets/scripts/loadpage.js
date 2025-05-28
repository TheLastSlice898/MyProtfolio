
    function loadPage(event, page) {
      event.preventDefault();
      fetch(page)
        .then(res => res.text())
        .then(html => {
          document.getElementById('content').innerHTML = html;
        });
    }