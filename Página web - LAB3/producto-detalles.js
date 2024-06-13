const libros = [

    // Nuevos ingresos
    
    {
        id: 1,
        titulo: 'Naci para esto',
        autor: 'Alice Oseman',
        precio: 22000,
        imagen: 'imagenes/libros/npe - ao1.png'
    },
    {
        id: 2,
        titulo: 'El problema de los 3 cuerpos',
        autor: 'Alice Oseman',
        precio: 27000,
        imagen: 'imagenes/libros/epdl3c - cl.jpg'
    },
    {
        id: 3,
        titulo: 'Dune',
        autor: 'Alice Oseman',
        precio: 28100,
        imagen: 'imagenes/libros/dune - fh.jpg'
    },
    {
        id: 4,
        titulo: 'Los juegos del hambre - Libro 4',
        autor: 'Alice Oseman',
        precio: 26300,
        imagen: 'imagenes/libros/ljdhbdpcys - sc.jpg'
    },

     // Bestseller Argentina
     
    {
        id: 5,
        titulo: 'Heartless',
        autor: 'Alice Oseman',
        precio: 19800,
        imagen: 'imagenes/libros/heartless - mm.jpg'
    },
    {
        id: 6,
        titulo: 'Alas de sangre',
        autor: 'Alice Oseman',
        precio: 26900,
        imagen: 'imagenes/libros/ads - ry.png'
    },
    {
        id: 7,
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'Alice Oseman',
        precio: 52500,
        imagen: 'imagenes/libros/hpylpf - jkr.png'
    },
    {
        id: 8,
        titulo: 'Buenos presagios',
        autor: 'Alice Oseman',
        precio: 26300,
        imagen: 'imagenes/libros/bp - tp&ng.jpg'
    },

    //Juveniles

    {
        id: 9,
        titulo: 'Los Juegos del Hambre',
        autor: 'Alice Oseman',
        precio: 26400,
        imagen: 'imagenes/libros/ljdh - sc.jpg'
    },
    {
        id: 10,
        titulo: 'Maze Runner: La Cura Mortal',
        autor: 'Alice Oseman',
        precio: 16500,
        imagen: 'imagenes/libros/mrlcm - jd.png'
    },
    {
        id: 11,
        titulo: 'Divergente',
        autor: 'Alice Oseman',
        precio: 26400,
        imagen: 'imagenes/libros/divergente - vr.jpg'
    },
    {
        id: 12,
        titulo: 'Cazadores de Sombras',
        autor: 'Alice Oseman',
        precio: 23300,
        imagen: 'imagenes/libros/cdscdh - cc.png'
    },
    // Comics y novelas graficas
    {
        id: 13,
        titulo: 'Invincible compendium one',
        autor: 'Alice Oseman',
        precio: 55400,
        imagen: 'imagenes/libros/ico - rk&.png'
    },
    
    {
        id: 14,
        titulo: 'Hellboy 1',
        autor: 'Alice Oseman',
        precio: 35100,
        imagen: 'imagenes/libros/hellboy - mm.jpg'
    },
    {
        id: 15,
        titulo: 'Gotham Central',
        autor: 'Alice Oseman',
        precio: 75600,
        imagen: 'imagenes/libros/gc - eb&gr.jpg'
    },
    {
        id: 16,
        titulo: 'Dragon Ball Super 12',
        autor: 'Alice Oseman',
        precio: 5310,
        imagen: 'imagenes/libros/dbs12 - at.jpg'
    },

    // Agrega más objetos para los demás libros
];

function cargarDetallesProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const idLibro = urlParams.get('id');

    const libro = libros.find(l => l.id === parseInt(idLibro));

    if (libro) {
        document.querySelector('.producto-detalles-imagen').src = libro.imagen;
        document.querySelector('.producto-detalles-titulo').textContent = `${libro.titulo} - ${libro.autor}`;
        document.querySelector('.producto-detalles-precio').textContent = `$${libro.precio}`;
    } else {
        console.error('Libro no encontrado');
    }
}

window.addEventListener('DOMContentLoaded', cargarDetallesProducto);