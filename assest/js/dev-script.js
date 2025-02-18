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
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 768) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', function () {
                this.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function () {
                this.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
    }
});


// 2. backdrop add in phone view nav

function toggleMenu() {
    let menu = document.getElementById("toggleMenu");
    let backdrop = document.getElementById("backdrop");

    menu.classList.toggle("active"); // Toggle menu visibility
    backdrop.style.display = menu.classList.contains("active") ? "block" : "none"; // Show/hide backdrop
}

// 3. filterbtn open sliderk
function openFilter() {
    document.getElementById("filterMenu").classList.add("active");
    document.getElementById("backdrop").style.display = "block";
}

function closeFilter() {
    document.getElementById("filterMenu").classList.remove("active");
    document.getElementById("backdrop").style.display = "none";
}



// 4. popup model script
// Show Popup after 4 seconds
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    let closeBtn = document.querySelector(".modal-close-btn");

    if (modal) {
        setTimeout(function () {
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
});


// 5. <!-- Blogs -->
function toggleBlogs() {
    const moreBlogs = document.getElementById("moreBlogs");
    const btn = document.getElementById("viewMoreBtnblog");

    if (moreBlogs.style.display === "none") {
        moreBlogs.style.display = "flex";
        btn.textContent = "View Less ←";
    } else {
        moreBlogs.style.display = "none";
        btn.textContent = "View More →";
    }
}

// 6. 360 img preview
// document.addEventListener("DOMContentLoaded", function() {
//     var iframe = document.getElementById('iframe-360');
//     var iframeDocument = iframe.contentWindow.document;

//     // Use Pannellum within the iframe
//     iframeDocument.body.innerHTML = '<div id="panorama-viewer" style="width:100%; height:500px;"></div>';
    
//     pannellum.viewer('panorama-viewer', {
//         "type": "equirectangular",     
//         "autoLoad": true,              
//         "panorama": "img/tiles-design/360.jpg"  
//     });
// });

//7. product detail page
 // Thumbnail functionality

 document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
            // Update main image (in a real app, you'd change the src attribute)
            mainImage.src = this.src.replace('60/60', '500/500');
        });
    });
    
    // Color selection functionality
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// 8. about page
let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');

        function updateSlides(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev', 'next');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i === (index - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                } else if (i === (index + 1) % slides.length) {
                    slide.classList.add('next');
                }
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides(currentSlide);
        }

        // Initial setup
        updateSlides(currentSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Add click handlers for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlides(currentSlide);
            });
        });

// 9. image grid gallery
new CBPGridGallery(document.getElementById('grid-gallery'));


//10.  tiles design page
document.getElementById("viewMoreBtn").addEventListener("click", function() {
    document.querySelectorAll(".hidden").forEach(item => {
        item.classList.remove("hidden");
    });
    this.style.display = "none";
});