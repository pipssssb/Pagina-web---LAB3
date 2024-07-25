function actualizarContadorCarrito() {
    const contadorElements = document.querySelectorAll('.carrito-contador');
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    
    contadorElements.forEach(contadorElement => {
        if (totalItems > 0) {
            contadorElement.textContent = totalItems;
            contadorElement.style.display = 'inline';
        } else {
            contadorElement.textContent = '';
            contadorElement.style.display = 'none';
        }
    });
}

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito-productos');
    const carritoVacio = document.querySelector('.carrito-vacio');
    const carritoAcciones = document.querySelector('.carrito-acciones');
    
    if (carrito.length === 0) {
        carritoContainer.style.display = 'none';
        carritoVacio.style.display = 'block';
        carritoAcciones.style.display = 'none';
    } else {
        carritoContainer.style.display = 'block';
        carritoVacio.style.display = 'none';
        carritoAcciones.style.display = 'flex';
        
        carritoContainer.innerHTML = '';
        
        carrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <button class="cantidad-btn menos" data-id="${producto.id}">-</button>
                    <p>${producto.cantidad}</p>
                    <button class="cantidad-btn mas" data-id="${producto.id}">+</button>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" data-id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
            carritoContainer.appendChild(div);
        });
    }
    actualizarTotal();
    actualizarContadorCarrito();
}

function actualizarTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    const totalElement = document.querySelector('#total');
    if (totalElement) {
        totalElement.textContent = `$${total}`;
    }
}

function agregarAlCarrito(producto) {
    const index = carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
        carrito[index].cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito(); // Asegúrate de que esta línea esté presente
    
    // Si estamos en la página del carrito, actualizamos la vista completa
    if (document.querySelector('.carrito-productos')) {
        actualizarCarrito();
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
    actualizarContadorCarrito();
}

function cambiarCantidad(id, cambio) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
        carrito[index].cantidad += cambio;
        if (carrito[index].cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
            actualizarContadorCarrito();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
    actualizarContadorCarrito();
    
    const carritoProductos = document.querySelector('.carrito-productos');
    if (carritoProductos) {
        carritoProductos.addEventListener('click', e => {
            if (e.target.closest('.carrito-producto-eliminar')) {
                const id = parseInt(e.target.closest('.carrito-producto-eliminar').dataset.id);
                eliminarDelCarrito(id);
            } else if (e.target.classList.contains('cantidad-btn')) {
                const id = parseInt(e.target.dataset.id);
                const cambio = e.target.classList.contains('mas') ? 1 : -1;
                cambiarCantidad(id, cambio);
            }
        });
    }
    
    const vaciarCarritoBtn = document.querySelector('.carrito-acciones-vaciar');
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            carrito = [];
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
        });
    }
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        actualizarContadorCarrito();
    }
});

