let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Theme toggle: persist preference in localStorage and apply on load
(function(){
    const themeToggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = saved ? saved : (prefersLight ? 'light' : 'dark');

    function applyTheme(theme){
        if(theme === 'light') document.documentElement.classList.add('light-theme');
        else document.documentElement.classList.remove('light-theme');
        if(themeToggle) themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
    }

    applyTheme(initial);

    if(themeToggle){
        themeToggle.addEventListener('click', ()=>{
            const isLight = document.documentElement.classList.contains('light-theme');
            const next = isLight ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            applyTheme(next);
        });
    }
})();
