function setLanguage(lang) {
    // Affiche les éléments de la langue choisie
    $('[data-lang]').hide();
    $('[data-lang="' + lang + '"]').show();
    
    // Si c'est un span, on utilise display inline
    $('[data-lang="' + lang + '"]').each(function() {
        if ($(this).prop("tagName") === "SPAN") {
            $(this).css("display", "inline");
        } else {
            $(this).css("display", "block");
        }
    });

    // Mise à jour du lien du CV
    var fileName = "CV_MOEZ_2026_DEVOPS_" + lang.toUpperCase() + ".pdf";
    $('#downloadBtn').attr('href', fileName);
    
    localStorage.setItem('prefLang', lang);
}

$(document).ready(function() {
    var userLang = navigator.language || navigator.userLanguage;
    // Anglais par défaut si pas de préférence sauvegardée
    var defaultLang = localStorage.getItem('prefLang') || 'en'; 
    
    setLanguage(defaultLang);
});