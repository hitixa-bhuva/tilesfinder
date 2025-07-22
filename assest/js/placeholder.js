    
  const phrases = ["Search for Bedroom tiles", "Search for Bathroom tiles", "Search for Kitchen tiles"];
  let currentPhrase = 0;
  let currentChar = 0;

  const input1 = document.getElementById("searchInput1");
  const input2 = document.getElementById("searchInput2");

  function typePlaceholder() {
    const text = phrases[currentPhrase];
    const partial = text.substring(0, currentChar++);

    if (input1) input1.placeholder = partial;
    if (input2) input2.placeholder = partial;

    if (currentChar <= text.length) {
      setTimeout(typePlaceholder, 100); // Typing speed
    } else {
      setTimeout(() => {
        currentChar = 0;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typePlaceholder();
      }, 2000); // Delay before next phrase
    }
  }

  typePlaceholder();



// second mobile nav bar
  const bottomNav = document.getElementById("bottomNav");
  const footer = document.getElementById("pageFooter");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const windowBottom = currentScrollY + window.innerHeight;

    const isNearFooter = windowBottom >= footerTop;

    if (isNearFooter) {
      // Hide when near footer
      bottomNav.classList.add("hide");
    } else if (currentScrollY < lastScrollY) {
      // Show when scrolling up
      bottomNav.classList.remove("hide");
    } else {
      // Optional: hide on scroll down
      // bottomNav.classList.add("hide");
    }

    lastScrollY = currentScrollY;
  });


// active in active menu phone view design and mockup

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.bottom-nav a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();

      if (linkPage === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
