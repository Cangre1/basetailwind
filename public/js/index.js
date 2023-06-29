// Seleccionamos el botón de menú y el menu lateral
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.menu');


// Añadimos un listener al botón del menú
menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu-hidden');
  var icon = document.getElementById("icon");
  var iconActive = document.getElementById("icon-active");
  icon.classList.toggle("hidden");
  iconActive.classList.toggle("hidden");
  
});

// Añadimos un listener al body para ocultar el menú
document.body.addEventListener('click', (event) => {
    if (event.target !== menu && event.target !== menuButton) {
      menu.classList.add('menu-hidden');
    }
});

// Seleccionamos la imagen del boton de menú
const img = document.querySelector('.img-icon');

// Añadimos un listener a la imagen para propagar el evento al botón padre
img.addEventListener('click', (event) => {
  // Propagar el evento al botón padre
  event.stopPropagation();
  event.currentTarget.parentNode.click();
});


// Obtener todos los enlaces del menú principal que tienen un atributo data-submenu
const menuLinks = document.querySelectorAll('a[data-submenu]');

// Añadir un evento mouseenter a cada enlace del menú principal
menuLinks.forEach((link) => {
  link.addEventListener('mouseenter', (event) => {
    // Obtener el valor del atributo data-submenu del enlace
    const submenuId = event.target.getAttribute('data-submenu');
    // Obtener el contenedor del submenú usando el valor del atributo data-submenu como id
    const submenu = document.getElementById(submenuId);
    // Eliminar la clase hidden del contenedor del submenú
    submenu.classList.remove('hidden');
  });
});

// Obtener todos los contenedores de submenú
const submenus = document.querySelectorAll('.submenu');

// Añadir un evento mouseleave a cada contenedor de submenú
submenus.forEach((submenu) => {
  submenu.addEventListener('mouseleave', (event) => {
    // Comprobar si el mouse sigue estando dentro del contenedor del submenú
    if (event.clientX < submenu.offsetLeft || event.clientX > submenu.offsetLeft + submenu.offsetWidth || event.clientY < submenu.offsetTop || event.clientY > submenu.offsetTop + submenu.offsetHeight) {
      // Obtener el enlace del menú principal correspondiente al submenú
      const link = document.querySelector(`a[data-submenu="${submenu.id}"]`).parentNode;
      // Añadir la clase hidden al contenedor del submenú
      console.log(link);
      link.classList.add('hidden');
    }
  });
});

// Añadir un evento mouseleave al body
document.body.addEventListener('mouseleave', (event) => {
    // Comprobar si el mouse ha salido del body
    if (event.clientY < 0) {
        // Ocultar todos los submenús
        submenus.forEach((submenu) => {
        submenu.classList.add('hidden');
        });
    }
    }
);


menuLinks.forEach((link) => {
    link.addEventListener('mouseenter', (event) => {
      // Obtener el valor del atributo data-submenu del enlace
      const submenuId = event.target.getAttribute('data-submenu');
      // Obtener el contenedor del submenú usando el valor del atributo data-submenu como id
      const submenu = document.getElementById(submenuId);
      // Eliminar la clase hidden del contenedor del submenú
      submenu.classList.remove('hidden');
    });
  
    link.addEventListener('mouseleave', (event) => {
      // Obtener el valor del atributo data-submenu del enlace
      const submenuId = event.target.getAttribute('data-submenu');
      // Obtener el contenedor del submenú usando el valor del atributo data-submenu como id
      const submenu = document.getElementById(submenuId);
      // Añadir la clase hidden al contenedor del submenú
      submenu.classList.add('hidden');
    });
  });

  
// Filter Menu
const filterMenu = document.getElementById("filter-menu");
const main = document.getElementById("main");
const grid = document.getElementById("grid-propiedades");
 
// Abre el menu lateral de filtros
function openMenu() {
    filterMenu.classList.remove('-mr-96');
    filterMenu.classList.add('mr-0');
    grid.classList.remove('xl:grid-cols-3');
}

// make the menu "go away"
function closeMenu() {
    filterMenu.classList.remove('mr-0');
    filterMenu.classList.add('-mr-96');
    grid.classList.add('xl:grid-cols-3')
}
