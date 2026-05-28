const menuToggle = document.getElementById("menuToggle");
const primaryNavigation = document.getElementById("primaryNavigation");

if (menuToggle && primaryNavigation) {
  function closeMenu() {
    primaryNavigation.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  }

  function openMenu() {
    primaryNavigation.classList.add("show");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
    menuToggle.textContent = "×";
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = primaryNavigation.classList.contains("show");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  primaryNavigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });
}