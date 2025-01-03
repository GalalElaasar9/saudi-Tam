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

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.dataset.lang;
    const flagSrc = option.querySelector('img').src;
    const languageText = option.querySelector('span').textContent;

    selects.forEach(select => {
      select.flag.src = flagSrc;
      select.language.textContent = languageText;
    });

    localStorage.setItem('language', lang);

    setLanguage(lang);
  });
});

function setLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }
}

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


document.querySelector('.navbar-toggler').addEventListener('click', function () {
  this.classList.toggle('collapsed');
});


let navbar = document.querySelector('.navbar');
window.addEventListener("scroll",()=>{
  if(window.scrollY >= 10){
    navbar.classList.add('fixed')
  }else{
    navbar.classList.remove('fixed')
  }
})