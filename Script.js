// NOVERASITE COMPANY ADMIN
// Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Noverasite Company Admin berhasil dijalankan!");

    // Navigasi menu
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            console.log("Menu dibuka:", link.textContent);
        });
    });

});
