// JavaScript untuk menangani tombol hamburger menu
var navToggle = document.getElementById("nav-toggle");
var navContent = document.getElementById("nav-content");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    if (navContent.classList.contains("hidden")) {
      navContent.classList.remove("hidden");
    } else {
      navContent.classList.add("hidden");
    }
  });
}

// JavaScript untuk menyembunyikan tombol hamburger menu pada tampilan md (medium) ke atas
var mdUp = window.matchMedia("(min-width: 640px)");

function handleMediaChange(mdUp) {
  if (mdUp.matches) {
    // Tampilan md (medium) ke atas, sembunyikan tombol hamburger menu
    if (!navContent.classList.contains("hidden")) {
      navContent.classList.add("hidden");
    }
  }
}

handleMediaChange(mdUp); // Panggil fungsi saat halaman dimuat
mdUp.addListener(handleMediaChange); // Tambahkan pemantauan perubahan tampilan
