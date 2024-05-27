document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
  });
});
