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

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('sous-section');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.sous-section').forEach(element => {
        observer.observe(element);
    });
});
