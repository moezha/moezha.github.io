function setLanguage(lang) {
    // 1. Gérer l'affichage des textes
    $('[data-lang]').hide();
    $('[data-lang="' + lang + '"]').show();
    
    // 2. Mettre à jour le lien de téléchargement (Ex: CV_MOEZ_2026_DEVOPS_FR.pdf)
    var fileName = "CV_MOEZ_2026_DEVOPS_" + lang.toUpperCase() + ".pdf";
    $('#downloadBtn').attr('href', fileName);
    
    localStorage.setItem('prefLang', lang);
}

$(document).ready(function() {
    var userLang = navigator.language || navigator.userLanguage;
    var defaultLang = localStorage.getItem('prefLang') || 
                     (userLang.startsWith('fr') ? 'fr' : (userLang.startsWith('de') ? 'de' : 'en'));
    setLanguage(defaultLang);
});