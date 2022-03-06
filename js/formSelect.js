// SELECCION ENTRADA

// Recorrer el array para que busque las entradas

const productosEntrada = productos.filter(producto => producto.categoria == 'ENTRADAS');

//Generar opciones en HTML

for (let item of productosEntrada) {

    let select = document.getElementById('entrada')
    select.innerHTML += `<option>${item.nombre}</option>`
}

// SELECCION PLATO PRINCIPAL

const productosPrincipal = productos.filter(producto => producto.categoria == 'PLATOS');

for (let item of productosPrincipal) {

    let select = document.getElementById('principal')
    select.innerHTML += `<option>${item.nombre}</option>`
}

// SELECCION POSTRES

const productosPostre = productos.filter(producto => producto.categoria == 'POSTRES');

for (let item of productosPostre) {

    let select = document.getElementById('postre')
    select.innerHTML += `<option>${item.nombre}</option>`
}

// SELECCION BEBIDAS

const productosBebida = productos.filter(producto => producto.categoria == 'BEBIDAS');

for (let item of productosBebida) {

    let select = document.getElementById('bebida')
    select.innerHTML += `<option>${item.nombre}</option>`
}

