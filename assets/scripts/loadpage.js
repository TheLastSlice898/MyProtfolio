const pageCache = {}; // Global cache

function setActiveNav(linkElement) {
  document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
  linkElement.classList.add('active');
}

function loadPage(event, page) {
  if (event){
    event.preventDefault(); 
    if (event.currentTarget){
      setActiveNav(event.currentTarget);
 }
}
  const content = document.getElementById('page-content');

  // Already cached? Use it.
  if (pageCache[page]) {
    console.log('It was in the cache bby gorl')
    animateTransition(content, pageCache[page]);
    return;
  }

  // Fetch and cache it
  setTimeout(() => {
    fetch(`assets/content/${page}`)
      .then(res => {
        if (!res.ok) throw new Error('Page not found');
        return res.text();
      })
      .then(data => {
        pageCache[page] = data; // Save to cache
        animateTransition(content, data);
      })
      .catch(err => {
        content.innerHTML = '<p>Error loading page.</p>';
        console.error(err);
      });
  }, 300);
}

function animateTransition(container, newContent) {
  container.innerHTML = newContent;

  // Optional: add fade-in for a quick smooth reveal
  container.classList.add('fade-in');

  // Remove fade-in class after animation finishes
  setTimeout(() => {
    container.classList.remove('fade-in');
  }, 300);
}
