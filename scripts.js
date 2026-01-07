function setLanguage(lang) {
    // Masquer tous les éléments avec data-lang
    $('[data-lang]').hide();
    // Afficher uniquement ceux de la langue sélectionnée
    $('[data-lang="' + lang + '"]').show();
    
    // Mettre à jour le nom du fichier CV dynamiquement
    var fileName = "CV_MOEZ_2026_DEVOPS_" + lang.toUpperCase() + ".pdf";
    $('#downloadBtn').attr('href', fileName);
    
    // Sauvegarder la préférence
    localStorage.setItem('prefLang', lang);
}

$(document).ready(function() {
    // Détection auto de la langue du navigateur
    var userLang = navigator.language || navigator.userLanguage;
    var defaultLang = localStorage.getItem('prefLang');
    
    if (!defaultLang) {
        if (userLang.startsWith('en')) defaultLang = 'en';
        else if (userLang.startsWith('fr')) defaultLang = 'fr';
        else defaultLang = 'de';
    }
    
    setLanguage(defaultLang);
});