    
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
  document.addEventListener("DOMContentLoaded", function () {
    const bottomNav = document.getElementById("bottomNav");
    const footer = document.getElementById("pageFooter");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bottomNav.classList.add("hide");
        } else {
          bottomNav.classList.remove("hide");
        }
      });
    }, {
      root: null, // viewport
      threshold: 0 // as soon as any part is visible
    });

    observer.observe(footer);
  });

// active in active menu phone view design and mockup

