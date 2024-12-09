const textes = [
    ' "Le Développement peut prendre plusieurs formes"',
    'que ca soit Physiquement ou Intérieurement  "'
    ];
let indexTexte = 0;
let indexChar = 0;

function ecrireTexte() {
    if (indexTexte < textes.length) {
        if (indexChar < textes[indexTexte].length) {
            document.getElementById("texte").innerHTML += textes[indexTexte].charAt(indexChar);
            indexChar++;
        } else {
            indexTexte++;
            indexChar = 0; // Réinitialiser l'index des caractères pour le prochain texte
            document.getElementById("texte").innerHTML += "<br>"; // Ajouter un saut de ligne entre les textes
        }
    } else {
        clearInterval(interval);
    }
}

const interval = setInterval(ecrireTexte, 70); // 100 ms entre chaque caractère




