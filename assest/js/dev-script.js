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



// 4. popup model script mocuk up model 

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

  function initModalScript() {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".modal-close-btn");

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
  }

  document.addEventListener('DOMContentLoaded', initModalScript);

//7. product detail page img click open main img

function initImageGallery() {
    var thumbnails = document.querySelectorAll('.thumbnail');
    var mainImage = document.querySelector('.main-image');

    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].onclick = function () {
        for (var j = 0; j < thumbnails.length; j++) {
          thumbnails[j].classList.remove('active');
        }
        this.classList.add('active');
        mainImage.src = this.src.replace('60/60', '500/500');
      };
    }

    var colorOptions = document.querySelectorAll('.color-option');
    for (var k = 0; k < colorOptions.length; k++) {
      colorOptions[k].onclick = function () {
        for (var l = 0; l < colorOptions.length; l++) {
          colorOptions[l].classList.remove('active');
        }
        this.classList.add('active');
      };
    }
  }

  document.onreadystatechange = function () {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      initImageGallery();
    }
  };

//10.  tiles design page
// document.getElementById("viewMoreBtn").addEventListener("click", function () {
//    document.querySelectorAll(".hidden").forEach(item => {
//       item.classList.remove("hidden");
//    });
//    this.style.display = "none";
// });

// 5. design details page zoom in img 
function zoomImage(btn) {
   const img = btn.closest(".main-image-container").querySelector("img");
   const overlay = document.createElement("div");
   overlay.className = "image-zoom-overlay";

   const zoomImg = img.cloneNode(true);
   overlay.appendChild(zoomImg);

   const closeBtn = document.createElement("button");
   closeBtn.innerHTML = "&times;";
   closeBtn.className = "zoom-close-btn";
   closeBtn.onclick = () => overlay.remove();

   overlay.appendChild(closeBtn);
   document.body.appendChild(overlay);
 }

// 6. designdetails-color-tooltip
  window.onload = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  };

// 8. search-container-mobile-desktop sticky
  window.onscroll = function () {
    var searchBar = document.querySelector('.search-container-mobile-desktop');
    var scrollY = window.scrollY;
    if (window.innerWidth <= 767) {
      if (scrollY > 150) {
        searchBar.classList.add('sticky-search');
      } else {
        searchBar.classList.remove('sticky-search');
      }
    } else {
      searchBar.classList.remove('sticky-search');
    }
  };
  
// 7. about page testimonial slider sidebar
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const totalSlides = slides.length;
  const sliderContainer = document.querySelector('.slider-container');

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove('prev', 'active', 'next', 'hidden');

      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
        slide.classList.add('prev');
      } else if (index === (currentSlide + 1) % totalSlides) {
        slide.classList.add('next');
      } else {
        slide.classList.add('hidden');
      }
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
  }

  let autoPlay = setInterval(() => {
    changeSlide(1);
  }, 5000);

  sliderContainer.onmouseenter = function () {
    clearInterval(autoPlay);
  };

  sliderContainer.onmouseleave = function () {
    autoPlay = setInterval(() => {
      changeSlide(1);
    }, 5000);
  };

  let startX = 0;
  let endX = 0;

  sliderContainer.ontouchstart = function (e) {
    startX = e.touches[0].clientX;
  };

  sliderContainer.ontouchend = function (e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeSlide(1);
      } else {
        changeSlide(-1); 
      }
    }
  }

  updateSlider(); 

