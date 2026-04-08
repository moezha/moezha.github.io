function setLanguage(lang) {
    // Hide all data-lang elements, show only the selected language
    $('[data-lang]').hide();
    $('[data-lang="' + lang + '"]').show();

    // Update CV download button — all files follow the same pattern now
    var fileName = 'CV_MOEZ_2026_DEVOPS_' + lang.toUpperCase() + '.pdf';
    $('#downloadBtn').attr('href', fileName).attr('download', fileName);

    // Save preference
    localStorage.setItem('prefLang', lang);
}

$(document).ready(function () {
    // Auto-detect browser language, fallback to saved preference
    var saved = localStorage.getItem('prefLang');
    var defaultLang;

    if (saved && cvFiles[saved]) {
        defaultLang = saved;
    } else {
        var userLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        if (userLang.startsWith('fr')) defaultLang = 'fr';
        else if (userLang.startsWith('de')) defaultLang = 'de';
        else defaultLang = 'en';
    }

    setLanguage(defaultLang);
});
