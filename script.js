function toggleText() {
    var hiddenText = document.getElementById("hiddenText");
    var toggleButton = document.getElementById("toggleButton");

    var computedStyle = window.getComputedStyle(hiddenText);
    var displayStyle = hiddenText.style.display || computedStyle.getPropertyValue("display");

    if (displayStyle === "none") {
        hiddenText.style.display = "inline";
        toggleButton.textContent = "Afficher moins";
    } else {
        hiddenText.style.display = "none";
        toggleButton.textContent = "Afficher plus";
    }
}

// bar de menu
function toggleMenu() {
    var menu = document.querySelector('.entete2');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        document.addEventListener('click', hideMenu);
    } else {
        menu.style.display = 'none';
        document.removeEventListener('click', hideMenu);
    }
}

function hideMenu(event) {
    var menu = document.querySelector('.entete2');
    var toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.style.display = 'none';
        document.removeEventListener('click', hideMenu);
    }
}

//script du blog
const arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    const currentSlide = document.querySelector('.video-short.active');
    const nextSlide = currentSlide.nextElementSibling || document.querySelector('.video-short:first-child');
    const currentArrow = arrow.previousElementSibling || document.querySelector('.arrow:last-child');
    const nextArrow = currentArrow.nextElementSibling || document.querySelector('.arrow:first-child');

    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');

    currentArrow.classList.remove('active');
    nextArrow.classList.add('active');
  });
});

    function authershort() {
    var authershort = document.getElementById("authershort");
    var afficheshort = document.getElementById("afficheshort");

    var computedStyle = window.getComputedStyle(authershort);
    var displayStyle = authershort.style.display || computedStyle.getPropertyValue("display");

    if (displayStyle === "none") {
        authershort.style.display = "grid";
        authershort.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
        afficheshort.textContent = "Afficher moins";
    } else {
        authershort.style.display = "none";
        afficheshort.textContent = "Afficher plus";
    }
}
