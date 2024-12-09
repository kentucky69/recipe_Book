// ... code existant ...

// Ajout d'une animation au chargement du slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    slider.style.opacity = 0; // Initialiser l'opacité à 0
    slider.style.transform = 'translateY(20px)'; // Déplacer légèrement vers le bas

    // Fonction pour animer le slider
    function animateSlider() {
        slider.style.transition = 'opacity 1s ease, transform 1s ease'; // Définir la transition
        slider.style.opacity = 1; // Rendre le slider visible
        slider.style.transform = 'translateY(0)'; // Remettre à la position d'origine
    }

    // Démarrer l'animation après un délai
    setTimeout(animateSlider, 100); // Délai de 100ms avant l'animation
});

// ... code existant ...