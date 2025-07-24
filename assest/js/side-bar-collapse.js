 document.addEventListener("DOMContentLoaded", function () {
    const collapses = document.querySelectorAll('#categoriesDropdown .collapse');

    collapses.forEach((collapse) => {
      collapse.addEventListener('show.bs.collapse', function () {
        // Close other collapses
        collapses.forEach((other) => {
          if (other !== collapse) {
            bootstrap.Collapse.getInstance(other)?.hide();
          }
        });

        // Reset all chevrons
        document.querySelectorAll('#categoriesDropdown .toggle-menu-item svg').forEach((icon) => {
          icon.classList.remove('rotate-chevron');
        });

        // Rotate current toggle's chevron
        const toggle = document.querySelector(`[href="#${collapse.id}"] svg`);
        if (toggle) toggle.classList.add('rotate-chevron');
      });

      collapse.addEventListener('hide.bs.collapse', function () {
        const toggle = document.querySelector(`[href="#${collapse.id}"] svg`);
        if (toggle) toggle.classList.remove('rotate-chevron');
      });
    });
  });