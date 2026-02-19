document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.body.classList.remove('menu-open');
        document.getElementById('mobileMenu').style.display = 'none';
        document.getElementById('burgerBtn').textContent = '☰';
    });
});

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    mobileMenu.style.display = isOpen ? 'flex' : 'none';
    burgerBtn.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.mobile-menu a, .mobile-menu .btn-consult').forEach(el => {
    el.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
        mobileMenu.style.display = 'none';
        burgerBtn.textContent = '☰';
    });
});

const modal = document.getElementById('consultModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

window.addEventListener('load', () => {

    setTimeout(() => {
        document.querySelectorAll('.reveal-by-word').forEach(el => {
            el.classList.add('animate');
        });
    }, 400);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.wave-reveal').forEach(el => {
            el.classList.add('animate');
        });
    }, 300);
});

