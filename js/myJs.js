const sidebar = document.getElementById('sidebar');
const sidebarCollapse = document.getElementById('sidebarCollapse');

sidebarCollapse.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    sidebar.classList.remove('active');
  }
});
