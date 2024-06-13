/*  BUSCADOR

 document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".searchbox input[type='search']");
    const searchButton = document.querySelector(".boton-buscador");
    const books = document.querySelectorAll(".libro");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        books.forEach(book => {
            const bookTitle = book.querySelector("p").innerText.toLowerCase();
            if (bookTitle.includes(query)) {
                book.style.display = "";
            } else {
                book.style.display = "none";
            }
        });
    });
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            searchButton.click();
        }
    });

});*/


// PRODUCTOS

/*const productos = [

    // Nuevos ingresos
    
    {
        id: "libro-01",
        titulo: "Naci para esto",
        imagen: "./imagenes/libros/npe-a01.png",
        categoria: {
            nombre: "Nuevos ingresos",
            id: "libro-01"
        },
        precio: 22000
    },
    {
        id: "libro-02",
        titulo: "El problema de los 3 cuerpos",
        imagen: "./imagenes/libros/epdl3c - cl.jpg",
        categoria: {
            nombre: "Nuevos ingresos",
            id: "libro-02"
        },
        precio: 27000
    },
    {
        id: "libro-03",
        titulo: "Dune",
        imagen: "./imagenes/libros/dune -fh.jpg",
        categoria: {
            nombre: "Nuevos ingresos",
            id: "libro-03"
        },
        precio: 28100
    },
    {
        id: "libro-04",
        titulo: "Los juegos del hambre - Libro 4",
        imagen: "./imagenes/libroos/ljdhbdpcys - sc.jpg",
        categoria: {
            nombre: "Nuevos ingresos",
            id: "libro-04"
        },
        precio: 26300
    },

     // Bestseller Argentina
     
    {
        id: "libro-05",
        titulo: "Heartless",
        imagen: "./imagenes/libros/heartless - mm.jpg",
        categoria: {
            nombre: "Bestseller Argentina",
            id: "libro-05"
        },
        precio: 19800
    },
    {
        id: "libro-06",
        titulo: "Alas de sangre",
        imagen: "./imagenes/libros/ads - ry.png",
        categoria: {
            nombre: "Bestseller Argentina",
            id: "libro-06"
        },
        precio: 26900
    },
    {
        id: "libro-07",
        titulo: "Harry Potter y la piedra filosofal",
        imagen: "./imagenes/libros/hpylpf - jkr.png",
        categoria: {
            nombre: "Bestseller Argentina",
            id: "libro-07"
        },
        precio: 52500
    },
    {
        id: "libro-08",
        titulo: "Buenos presagios",
        imagen: "./imagenes/libros/bp - tg&ng.jpg",
        categoria: {
            nombre: "Bestseller Argentina",
            id: "libro-08"
        },
        precio: 26300
    },

    //Juveniles

    {
        id: "libro-09",
        titulo: "Los Juegos del Hambre",
        imagen: "./imagenes/libros/ljdh - sc.jpg",
        categoria: {
            nombre: "Juveniles",
            id: "libro-09"
        },
        precio: 26.400
    },
    {
        id: "libro-10",
        titulo: "Maze Runner: La Cura Mortal",
        imagen: "./imagenes/libros/mrlcm - jd.png",
        categoria: {
            nombre: "Juveniles",
            id: "libro-10"
        },
        precio: 16.500
    },
    {
        id: "libro-11",
        titulo: "Divergente",
        imagen: "./imagenes/libros/divergente - vr.jpg",
        categoria: {
            nombre: "Juveniles",
            id: "libro-11"
        },
        precio: 26.400
    },
    {
        id: "libro-12",
        titulo: "Cazadores de Sombras",
        imagen: "./imagenes/libros/cdscdh - cc.png",
        categoria: {
            nombre: "Juveniles",
            id: "libro-12"
        },
        precio: 23.300
    },
    // Comics y novelas graficas
    {
        id: "libro-13",
        titulo: "Invincible compendium one",
        imagen: "./imagenes/libros/ico - rk&.png",
        categoria: {
            nombre: "Comics y novelas graficas",
            id: "libro-13"
        },
        precio: 55.400
    },
    
    {
        id: "libro-14",
        titulo: "Hellboy 1",
        imagen: "./imagenes/libros/hellboy - mm.jpg",
        categoria: {
            nombre: "Comics y novelas graficas",
            id: "libro-14"
        },
        precio: 35.100
    },
    {
        id: "libro-15",
        titulo: "Gotham Central",
        imagen: "./imagenes/libros/gc - eb&gr.jpg",
        categoria: {
            nombre: "Comics y novelas graficas",
            id: "libro-15"
        },
        precio: 75.600
    },
    {
        id: "libro-16",
        titulo: "Dragon Ball Super 12",
        imagen: "./imagenes/libros/dbs12 - at.jpg",
        categoria: {
            nombre: "Comics y novelas graficas",
            id: "libro-16"
        },
        precio: 5.310
    }, 
];*/

// const contenedorProductos=document.querySelector("#contenedor-productos");

// function cargarProductos(){
//     productos.forEach(producto => {
//         const div=document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML=`
//             <img class="libro-imagen" src="${(producto.imagen)}" alt="${(producto.titulo)}" style="width:121px;height:192px;">
//             <div class="libro-detalles">
//                 <button class="ver-libro"><a href="producto-detalles.html"><p><span style="font-weight: bold">Naci para esto<br/>Alice Oseman<br/></span>$22.000</p></a></button>
//             </div>
//         `
//         contenedorProductos.append(div);
//     })

//     cargarProductos();