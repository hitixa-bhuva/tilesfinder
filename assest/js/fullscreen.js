
    function openImagePreview() {
      const image = document.querySelector(".image-content img");
      const overlay = document.getElementById("fullscreenOverlay");
      const fullscreenImg = document.getElementById("fullscreenImage");

      fullscreenImg.src = image.src;
      overlay.style.display = "flex";
    }

    function closeImagePreview(event) {
      if (event) event.stopPropagation(); // Prevent closing when clicking on image
      document.getElementById("fullscreenOverlay").style.display = "none";
    }