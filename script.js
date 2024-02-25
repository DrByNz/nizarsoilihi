function toggleText() {
    var hiddenText = document.getElementById("hiddenText");
    var toggleButton = document.getElementById("toggleButton");

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "inline";
        toggleButton.textContent = "Afficher moins";
    } else {
        hiddenText.style.display = "none";
        toggleButton.textContent = "Afficher plus";
    }
}