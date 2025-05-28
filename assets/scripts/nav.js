function setActiveNav(linkElement) {
  document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
  linkElement.classList.add('active');
}
