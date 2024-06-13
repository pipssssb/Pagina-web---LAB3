


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
