lucide.createIcons();

// MENU MOBILE
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// FORMULARIO A WHATSAPP
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const empresa = document.getElementById('empresa').value.trim();
        const servicio = document.getElementById('servicio').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !correo || !servicio || !mensaje) {
            alert('Por favor completa los campos obligatorios.');
            return;
        }

        const numeroWhatsapp = '51919471346'; 

        const texto = 
`Hola, me gustaría solicitar información sobre sus servicios.

*Datos del contacto:*
- Nombre: ${nombre}
- Correo: ${correo}
- Empresa: ${empresa || 'No especificada'}
- Servicio de interés: ${servicio}

*Detalle del requerimiento:*
${mensaje}`;

        const url = `https://wa.me/${51919471346}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });
}

// EFECTO NAVBAR
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    }
});
