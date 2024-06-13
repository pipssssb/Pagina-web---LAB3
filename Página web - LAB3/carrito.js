// Obtener referencias a los elementos del DOM
const carritoVacio = document.querySelector('.carrito-vacio');
const carritoProductos = document.querySelector('.carrito-productos');
const carritoAccionesVaciar = document.querySelector('.carrito-acciones-vaciar');
const carritoAccionesTotal = document.querySelector('#total');
const carritoAccionesPagar = document.querySelector('.carrito-acciones-pagar');

// Array para almacenar los productos en el carrito
let carrito = [];

// Función para renderizar el carrito
function renderizarCarrito() {
  // Limpiar el contenido del carrito
  carritoProductos.innerHTML = '';

  // Si el carrito está vacío, mostrar el mensaje
  if (carrito.length === 0) {
    carritoVacio.style.display = 'block';
    carritoAccionesVaciar.style.display = 'none';
    carritoAccionesTotal.textContent = '$0';
    carritoAccionesPagar.style.display = 'none';
  } else {
    // Ocultar el mensaje de carrito vacío y mostrar los productos
    carritoVacio.style.display = 'none';
    carritoAccionesVaciar.style.display = 'block';
    carritoAccionesPagar.style.display = 'block';

    // Calcular el total
    let total = 0;
    carrito.forEach(producto => {
      total += producto.precio * producto.cantidad;

      // Crear el elemento HTML para cada producto
      const carritoProducto = document.createElement('div');
      carritoProducto.classList.add('carrito-producto');
      carritoProducto.innerHTML = `
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
          <small>Título</small>
          <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
          <small>Cantidad</small>
          <p>${producto.cantidad}</p>
          <button class="carrito-producto-cantidad-menos">-</button>
          <button class="carrito-producto-cantidad-mas">+</button>
        </div>
        <div class="carrito-producto-precio">
          <small>Precio</small>
          <p>$${producto.precio}</p>
        </div>
        <div class="carrito-producto-totalsinenvio">
          <small>Total sin envío</small>
          <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i></button>
      `;

      // Agregar evento para eliminar el producto
      const botonEliminar = carritoProducto.querySelector('.carrito-producto-eliminar');
      botonEliminar.addEventListener('click', () => eliminarProducto(producto.id));

      // Agregar evento para disminuir la cantidad
      const botonMenos = carritoProducto.querySelector('.carrito-producto-cantidad-menos');
      botonMenos.addEventListener('click', () => actualizarCantidad(producto.id, -1));

      // Agregar evento para aumentar la cantidad
      const botonMas = carritoProducto.querySelector('.carrito-producto-cantidad-mas');
      botonMas.addEventListener('click', () => actualizarCantidad(producto.id, 1));

      // Agregar el producto al contenedor
      carritoProductos.appendChild(carritoProducto);
    });

    // Actualizar el total
    carritoAccionesTotal.textContent = `$${total}`;
  }
}

// Obtener referencia al botón del carrito en el nav
const carritoBotonNav = document.querySelector('nav ul li:nth-child(2) button');

function actualizarContadorCarritoNav() {
  const cantidadEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  carritoBotonNav.innerHTML = `<i class="bi bi-cart"></i> Carrito (${cantidadEnCarrito})`;
}

function agregarProducto(producto) {
    // ... (código existente)
  
    renderizarCarrito();
    actualizarContadorCarritoNav();
  }
  
  function eliminarProducto(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    renderizarCarrito();
    actualizarContadorCarritoNav();
  }
  
  function actualizarCantidad(id, cantidad) {
    const producto = carrito.find(p => p.id === id);
  
    if (producto) {
      producto.cantidad += cantidad;
  
      if (producto.cantidad === 0) {
        eliminarProducto(id);
      } else {
        renderizarCarrito();
        actualizarContadorCarritoNav();
      }
    }
  }


  // Obtener referencia al elemento donde se renderizarán los productos
const carritoProductosContainer = document.querySelector('.carrito-productos');

// Función para renderizar el carrito
function renderizarCarrito() {
  // Limpiar el contenido anterior
  carritoProductosContainer.innerHTML = '';

  // Si el carrito está vacío, mostrar el mensaje
  if (carrito.length === 0) {
    carritoVacio.style.display = 'block';
    carritoAccionesVaciar.style.display = 'none';
    carritoAccionesTotal.textContent = '$0';
    carritoAccionesPagar.style.display = 'none';
  } else {
    // Ocultar el mensaje de carrito vacío y mostrar los productos
    carritoVacio.style.display = 'none';
    carritoAccionesVaciar.style.display = 'block';
    carritoAccionesPagar.style.display = 'block';

    // Calcular el total
    let total = 0;
    carrito.forEach(producto => {
      total += producto.precio * producto.cantidad;

      // Crear el elemento HTML para cada producto
      const carritoProducto = document.createElement('div');
      carritoProducto.classList.add('carrito-producto');
      carritoProducto.innerHTML = `
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
          <small>Título</small>
          <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
          <small>Cantidad</small>
          <p>${producto.cantidad}</p>
          <button class="carrito-producto-cantidad-menos">-</button>
          <button class="carrito-producto-cantidad-mas">+</button>
        </div>
        <div class="carrito-producto-precio">
          <small>Precio</small>
          <p>$${producto.precio}</p>
        </div>
        <div class="carrito-producto-totalsinenvio">
          <small>Total sin envío</small>
          <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i></button>
      `;

      // Agregar evento para eliminar el producto
      const botonEliminar = carritoProducto.querySelector('.carrito-producto-eliminar');
      botonEliminar.addEventListener('click', () => eliminarProducto(producto.id));

      // Agregar evento para disminuir la cantidad
      const botonMenos = carritoProducto.querySelector('.carrito-producto-cantidad-menos');
      botonMenos.addEventListener('click', () => actualizarCantidad(producto.id, -1));

      // Agregar evento para aumentar la cantidad
      const botonMas = carritoProducto.querySelector('.carrito-producto-cantidad-mas');
      botonMas.addEventListener('click', () => actualizarCantidad(producto.id, 1));

      // Agregar el producto al contenedor
      carritoProductosContainer.appendChild(carritoProducto);
    });

    // Actualizar el total
    carritoAccionesTotal.textContent = `$${total}`;
  }

  // Actualizar el contador del carrito en el nav
  actualizarContadorCarritoNav();
}



// Función para vaciar el carrito
carritoAccionesVaciar.addEventListener('click', () => {
  carrito = [];
  renderizarCarrito();
});

// Inicializar el carrito vacío
renderizarCarrito();


//API MP
/* const mercadopago = new window.MercadoPago('TU_ACCESS_TOKEN', {
  locale: 'es-AR'
});

//Funcion para procesar el pago
function procesarPago(){
  //obtener datos del carrito
  const items= carrito.map(item => ({
    id: item.id.toString(),
    title: item.titulo,
    currency_id: 'ARS', // moneda
    picture_url: item.imagen,
    description: item.descripcion,
    category_id: 'otros', // Puedes cambiar la categoria
    quantity: item.cantidad,
    unit_price: parseFloat(item.precio)
    }));

    // Crear los datos de la preferencia de pago
  const preferenceData = {
    items,
    payers: {
      email: 'usuario@ejemplo.com' // Puedes solicitar el correo electrónico al usuario
    },
    back_urls: {
      success: 'https://tudominio.com/success', // URL de éxito
      failure: 'https://tudominio.com/failure', // URL de error
      pending: 'https://tudominio.com/pending' // URL de pago pendiente
    },
    auto_return: 'approved' // Redirige automáticamente después del pago
  };

  // Crear la preferencia de pago
  mercadopago.preferences.create(preferenceData)
    .then(function(response) {
      // Redirigir al checkout de Mercado Pago
      window.location.href = response.body.init_point;
    })
    .catch(function(error) {
      // Manejar el error
      console.error(error);
    });
}

    // Evento para iniciar el proceso de pago
const botonPagar = document.querySelector('.carrito-acciones-pagar');
botonPagar.addEventListener('click', procesarPago);
*/
