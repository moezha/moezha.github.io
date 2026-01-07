// Fonction pour changer la langue et le lien du CV
function setLanguage(lang) {
    // Cache tous les éléments data-lang et affiche la langue cible
    $('[data-lang]').hide();
    $('[data-lang="' + lang + '"]').show();
    
    // Met à jour le lien de téléchargement du CV
    // Format attendu : CV_MOEZ_2026_DEVOPS_FR.pdf
    var fileName = "CV_MOEZ_2026_DEVOPS_" + lang.toUpperCase() + ".pdf";
    $('#downloadBtn').attr('href', fileName);
    
    // Sauvegarde la préférence
    localStorage.setItem('prefLang', lang);
}

// Initialisation au chargement
$(document).ready(function() {
    var userLang = navigator.language || navigator.userLanguage;
    var defaultLang = localStorage.getItem('prefLang');
    
    if (!defaultLang) {
        if (userLang.startsWith('fr')) {
            defaultLang = 'fr';
        } else if (userLang.startsWith('de')) {
            defaultLang = 'de';
        } else {
            defaultLang = 'en'; // Par défaut
        }
    }
    
    setLanguage(defaultLang);
});