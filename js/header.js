function toggleHeader() {
    var menu = document.getElementById("mobileMenu");
    if (!menu.classList.contains("responsive")) {
        menu.classList.add("responsive");
    } else {
        menu.classList.remove("responsive");
    }
}
