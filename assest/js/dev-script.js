// all script description
// 1. hover dropdown on desktop
// 2. backdrop add in phone view nav
// 3. filterbtn open sliderk
// 4. Show Popup after 4 seconds
// 5. Blogs
// 6. 360 img preview
// 7. product detail page
// 8. about page
// 9. image grid gallery
// 10. tiles design page

// 1. Enable hover dropdown on desktop

function openFilter() {
  const filter = document.getElementById("filterSidebar");
  const backdrop = document.getElementById("backdrop");

  // Only show in mobile view
  if (window.innerWidth < 992) {
    filter.classList.remove("d-none");
    setTimeout(() => {
      filter.classList.add("active");
    }, 10);

    backdrop.classList.remove("d-none");
    backdrop.style.display = "block";
    backdrop.classList.add("show");
    document.body.classList.add("no-scroll");
  }
}

function closeFilter() {
  const filter = document.getElementById("filterSidebar");
  const backdrop = document.getElementById("backdrop");

  if (window.innerWidth < 992) {
    filter.classList.remove("active");
    backdrop.classList.remove("show");

    setTimeout(() => {
      filter.classList.add("d-none");
      backdrop.style.display = "none";
      backdrop.classList.add("d-none");
      document.body.classList.remove("no-scroll");
    }, 300);
  }
}


// 2. backdrop add in phone view nav

function toggleMenu() {
  const menu = document.getElementById("toggleMenu");
  const backdrop = document.getElementById("backdrop");

  // If menu was hidden (d-none), show it first
  if (menu.classList.contains("d-none")) {
    menu.classList.remove("d-none");
    backdrop.classList.remove("d-none");
  }

  const isOpen = menu.classList.toggle("active");

  backdrop.style.display = isOpen ? "block" : "none";
  backdrop.classList.toggle("show", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);

  if (!isOpen) {
    // Wait for animation before hiding
    setTimeout(() => {
      menu.classList.add("d-none");
      backdrop.classList.add("d-none");
    }, 300);
  }

  closeFilterMenu();
}

function closeFilterMenu() {
  const filter = document.getElementById("filterSidebar");
  const backdrop = document.getElementById("backdrop");
  const menu = document.getElementById("toggleMenu");

  filter?.classList.remove("active");

  if (!menu.classList.contains("active") && !filter?.classList.contains("active")) {
    backdrop.classList.remove("show");
    document.body.classList.remove("no-scroll");

    setTimeout(() => {
      backdrop.style.display = "none";
      backdrop.classList.add("d-none");
    }, 300);
  }
}



// 4. popup model script

document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("modal");
  let closeBtn = document.querySelector(".modal-close-btn");

  if (modal) {
    setTimeout(function () {
      closeAllSidebars();

      modal.style.display = "block";
      document.body.classList.add("modal-open");
    }, 5000);
  }

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    };
  }
  function closeAllSidebars() {
    const menu = document.getElementById("toggleMenu");
    const backdrop = document.getElementById("backdrop");
    if (menu && menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
    if (backdrop) {
      backdrop.style.display = "none";
    }

    const filterSidebar = document.getElementById("filterSidebar");
    const filterBackdrop = document.getElementById("filterBackdrop");
    if (filterSidebar && filterSidebar.classList.contains("show")) {
      filterSidebar.classList.remove("show");
    }
    if (filterBackdrop && filterBackdrop.classList.contains("show")) {
      filterBackdrop.classList.remove("show");
    }

    document.body.classList.remove("no-scroll");
  }
});


//7. product detail page

document.addEventListener('DOMContentLoaded', function () {
   const thumbnails = document.querySelectorAll('.thumbnail');
   const mainImage = document.querySelector('.main-image');

   thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function () {
         thumbnails.forEach(t => t.classList.remove('active'));
         this.classList.add('active');
         mainImage.src = this.src.replace('60/60', '500/500');
      });
   });

   const colorOptions = document.querySelectorAll('.color-option');
   colorOptions.forEach(option => {
      option.addEventListener('click', function () {
         colorOptions.forEach(o => o.classList.remove('active'));
         this.classList.add('active');
      });
   });
});

//10.  tiles design page
// document.getElementById("viewMoreBtn").addEventListener("click", function () {
//    document.querySelectorAll(".hidden").forEach(item => {
//       item.classList.remove("hidden");
//    });
//    this.style.display = "none";
// });
