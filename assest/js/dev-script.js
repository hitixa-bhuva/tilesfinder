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
// document.addEventListener('DOMContentLoaded', function () {
//    if (window.innerWidth > 768) {
//       const dropdowns = document.querySelectorAll('.dropdown');
//       dropdowns.forEach(dropdown => {
//          dropdown.addEventListener('mouseover', function () {
//             this.querySelector('.dropdown-menu').classList.add('show');
//          });
//          dropdown.addEventListener('mouseleave', function () {
//             this.querySelector('.dropdown-menu').classList.remove('show');
//          });
//       });
//    }
// });


// 2. backdrop add in phone view nav
  function toggleMenu() {
    const menu = document.getElementById("toggleMenu");
    const backdrop = document.getElementById("backdrop");
    const isOpen = menu.classList.toggle("active");
    backdrop.style.display = isOpen ? "block" : "none";
    closeFdsilter();
  }
  
function closeFimklkmlter() {
  const filter = document.getElementById("filterSidebar");

  filter.classList.remove("active");
  backdrop.classList.remove("show");
}


// 3. filterbtn open sliderk
//   function openFilter() {
//     document.querySelector('.filter-home-col-2').classList.add('active');
//   }

//   function closeFilter() {
//     document.querySelector('.filter-home-col-2').classList.remove('active');
//   }

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
