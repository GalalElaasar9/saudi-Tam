const selects = [
  {
    dropdown: document.querySelector('#header-select .Dropdown'),
    flag: document.querySelector('#current-flag-header'),
    language: document.querySelector('#current-language-header'),
    options: document.querySelector('#header-select .options'),
  },
  {
    dropdown: document.querySelector('#footer-select .footer-dropdown'),
    flag: document.querySelector('#current-flag-footer'),
    language: document.querySelector('#current-language-footer'),
    options: document.querySelector('#footer-select .footer-options'),
  },
];

// تغيير اللغة عند اختيار خيار
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.dataset.lang;
    const flagSrc = option.querySelector('img').src;
    const languageText = option.querySelector('span').textContent;

    // تحديث القوائم جميعها
    selects.forEach(select => {
      select.flag.src = flagSrc;
      select.language.textContent = languageText;
    });

    // تخزين اللغة المختارة
    localStorage.setItem('language', lang);

    // تنفيذ تغيير اللغة
    setLanguage(lang);
  });
});

// تطبيق اللغة المخزنة
function setLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    // alert('تم اختيار اللغة العربية');
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    // alert('English selected');
  }
}

// استعادة اللغة المخزنة عند التحميل
const savedLanguage = localStorage.getItem('language') || 'ar';
const initialOption = document.querySelector(`.option[data-lang="${savedLanguage}"]`);
if (initialOption) {
  const flagSrc = initialOption.querySelector('img').src;
  const languageText = initialOption.querySelector('span').textContent;

  selects.forEach(select => {
    select.flag.src = flagSrc;
    select.language.textContent = languageText;
  });

  setLanguage(savedLanguage);
}

// let links = document.querySelectorAll('.nav-link')
// links.forEach((link)=>{
//   if(window.location.href === link.href){
//     link.classList.add('active');
//   }
// })

  // لضمان إضافة الفئة collapsed عند النقر
  document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('collapsed');
  });

// let navbar = document.querySelector('.navbar');
// window.addEventListener("scroll",()=>{
//   if(window.scrollY >= 154){
//     navbar.classList.add('fixed')
//   }else{
//     navbar.classList.remove('fixed')
//   }
// })