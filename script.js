// عرض/إخفاء قائمة اللغة عند الضغط على الزر
document.getElementById('lang-btn').addEventListener('click', function() {
    const menu = document.querySelector('.lang-options');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// التبديل بين اللغات
function switchLang(lang) {
    const currentPage = window.location.pathname.split("/").pop();
    if(currentPage.includes("index")) {
        if(lang === 'ar') window.location.href = 'index.html';
        if(lang === 'en') window.location.href = 'index-en.html';
    } else if(currentPage.includes("contact")) {
        if(lang === 'ar') window.location.href = 'contact.html';
        if(lang === 'en') window.location.href = 'contact-en.html';
    }
}
