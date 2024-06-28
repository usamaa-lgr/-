document.addEventListener("DOMContentLoaded", function () {
  const restrictedLinks = document.querySelectorAll(".task.restricted a");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    restrictedLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Access to this game is restricted on mobile devices.");
      });
    });
  }
});
