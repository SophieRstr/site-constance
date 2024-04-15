document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');
  const verticalMenuItems = document.querySelector('.menu-items.vertical');

  menuToggle.addEventListener('click', function () {
    menuItems.classList.toggle('active');
    verticalMenuItems.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
});
