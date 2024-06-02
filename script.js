var menuToggle = document.getElementById('menu-toggle');
var menuNav = document.getElementById('menu-nav');

menuToggle.addEventListener('click', function() {
    menuNav.classList.toggle('active');
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == '' || email == '' || message == '') {
        alert('Molimo Vas popunite sva polja u formi.');
        return false;
    }

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Molimo Vas unesite validnu email adresu.');
        return false;
    }

    alert('Vaša poruka je uspešno poslata!');
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Promena slajda svake 2 sekunde, možete prilagoditi vreme prebacivanja
    }
});
