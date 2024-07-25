const iconoMenu = document.getElementById('iconoMenu');
const elementosMenu = document.querySelectorAll('.navegador a');
const navbar = document.getElementById('navbar');

iconoMenu.addEventListener('click', function() {

    if (iconoMenu.getAttribute('value') === 'false') { 

        iconoMenu.setAttribute('value', 'true'); 
        navbar.style.position = 'absolute';
        navbar.style.borderBottom = '2px solid var(--color-lavanda)';
        elementosMenu.forEach(elemento => {
                elemento.style.display = 'flex';
                elemento.style.justifyContent = 'center';
        });

        
    } else {

        iconoMenu.setAttribute('value', 'false'); 
        navbar.style.borderBottom = '2px solid transparent';
        navbar.style.position = 'initial';
        elementosMenu.forEach(elemento => { 
            elemento.style.display = 'none';
        });
    }
});

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;

    if ((windowWidth >= 768 && iconoMenu.getAttribute('value') === 'true') || (windowWidth >= 768 && iconoMenu.getAttribute('value') === 'false')) {
        iconoMenu.setAttribute('value', 'false');
        navbar.style.borderBottom = '2px solid transparent';
        navbar.style.position = 'initial';
        elementosMenu.forEach(elemento => { 
            elemento.style.display = 'flex';
        });
    }
});

window.addEventListener('resize', function() {
    const largoVentana = window.innerWidth;

    if (largoVentana <= 768 && iconoMenu.getAttribute('value') === 'false') {
        navbar.style.borderBottom = '2px solid transparent';
        navbar.style.position = 'initial';
        elementosMenu.forEach(elemento => { 
            elemento.style.display = 'none';
        });
    }
});