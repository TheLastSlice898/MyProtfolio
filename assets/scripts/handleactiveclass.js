const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add 'active' to the clicked link
    this.classList.add('active');
  });
});
