window.onload = function () {
    var mobileToggle = document.getElementById('mobileToggle');
    var sidebar = document.getElementById('sidebarMenu');
    var backdrop = document.getElementById('errorstyle-sidebarBackdrop');

    mobileToggle.onclick = function () {
      var isActive = sidebar.classList.toggle('active');
      backdrop.classList.toggle('active', isActive);
      mobileToggle.textContent = isActive ? '✕' : '☰';
    };

    var navLinks = document.querySelectorAll('.errorstyle-nav-menu a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].onclick = function () {
        sidebar.classList.remove('active');
        backdrop.classList.remove('active');
        mobileToggle.textContent = '☰';
      };
    }

    backdrop.onclick = function () {
      sidebar.classList.remove('active');
      backdrop.classList.remove('active');
      mobileToggle.textContent = '☰';
    };
  };