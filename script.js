function toggleContent(card) {
    const content = card.querySelector('.content');
    const arrow = card.querySelector('.arrow');

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(60deg)";
    }
}

function toggleMenu() {
    const nav = document.getElementById("nav-bar");
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
}


