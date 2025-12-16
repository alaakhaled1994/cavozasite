document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const langText = document.getElementById('lang-text');
    const body = document.body;

    const currentLang = localStorage.getItem('lang') || 'ar';
    
    // تطبيق اللغة المخزنة أو الافتراضية عند التحميل
    setLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        const newLang = body.classList.contains('ar') ? 'en' : 'ar';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        // تحديث كلاس الـ body
        body.classList.remove('ar', 'en');
        body.classList.add(lang);
        
        // تحديث زر اللغة
        langBtn.setAttribute('data-lang', lang);
        
        // **التعديل هنا:** تحديث نص الزر ليكون EN/AR دائمًا
        langText.textContent = 'EN/AR';

        // تحديث اتجاه النص العام
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // تحديث محتوى العناصر
        updateContent(lang);

        // تحديث عنوان الصفحة
        updateTitle(lang);

        // حفظ التفضيل
        localStorage.setItem('lang', lang);
    }

    function updateContent(lang) {
    document.querySelectorAll('[data-ar], [data-en]').forEach(element => {
        const content = element.getAttribute(`data-${lang}`);
        if (content) {
            // **التعديل هنا:** استخدام innerHTML للسماح بوجود وسم <span> وتفسيره (للتلوين الذهبي)
            element.innerHTML = content; 
        }
    });
}

    function updateTitle(lang) {
        const titleElement = document.querySelector('title');
        const titleAr = titleElement.getAttribute('data-ar-title');
        const titleEn = titleElement.getAttribute('data-en-title');
        
        if (lang === 'ar' && titleAr) {
            document.title = titleAr;
        } else if (lang === 'en' && titleEn) {
            document.title = titleEn;
        }
    }
});