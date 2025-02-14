
// Enable hover dropdown on desktop
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


// backdrop add in phone view nav

function toggleMenu() {
    let menu = document.getElementById("toggleMenu");
    let backdrop = document.getElementById("backdrop");

    menu.classList.toggle("active"); // Toggle menu visibility
    backdrop.style.display = menu.classList.contains("active") ? "block" : "none"; // Show/hide backdrop
}

// filterbtn open sliderk
function openFilter() {
    document.getElementById("filterMenu").classList.add("active");
    document.getElementById("backdrop").style.display = "block";
}

function closeFilter() {
    document.getElementById("filterMenu").classList.remove("active");
    document.getElementById("backdrop").style.display = "none";
}



