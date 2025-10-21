/**
 * Fichier script.js
 * Gère les interactions utilisateur, comme le menu de navigation mobile.
 */

// Définition d'une fonction pour initialiser le basculeur de menu
function initMenuToggle() {
    // 1. Sélectionner les éléments importants du HTML en utilisant leurs classes et IDs
    const menuToggle = document.querySelector('.menu-toggle'); // Le bouton "☰"
    const navLinks = document.getElementById('nav-links');     // Le conteneur des liens de navigation

    // 2. Vérifier si les éléments ont été trouvés (sécurité)
    if (menuToggle && navLinks) {
        
        // 3. Ajouter un "écouteur d'événement" qui réagit au 'click' sur le bouton
        menuToggle.addEventListener('click', function() {
            
            // a) **Action principale :** Basculer la classe 'active' sur les liens.
            // Le CSS utilise cette classe pour afficher ou cacher le menu.
            navLinks.classList.toggle('active');

            // b) **Accessibilité (ARIA) :** Mettre à jour l'état du bouton pour les lecteurs d'écran.
            // On vérifie si l'attribut est déjà à 'true', sinon on le force à 'false'.
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            
            // On inverse l'état actuel : si c'était ouvert (true), ça devient fermé (false), et vice-versa.
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
}

// Lancement : On s'assure que le DOM (la structure HTML) est complètement chargé
// avant d'essayer de sélectionner et d'interagir avec les éléments.
document.addEventListener('DOMContentLoaded', initMenuToggle);