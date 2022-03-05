//Reserva de mesas

////////////////////////////////////////////////////////////
// *** ARRAYS ***

const categorias = ['ENTRADAS', 'PLATOS', 'BEBIDAS', 'POSTRES'];

// Objetos

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

// Array vacio para usar con objetos
const productos = [];

// Método push para agregar objetos al array

productos.push(new Producto(1, 'ENSALADA', 500, categorias[0]));
productos.push(new Producto(2, 'PORCIÓN FRITAS', 500, categorias[0]));
productos.push(new Producto(3, 'CORDERO', 2000, categorias[1]));
productos.push(new Producto(4, 'TRUCHA', 2000, categorias[1]));
productos.push(new Producto(5, 'AGUA', 200, categorias[2]));
productos.push(new Producto(6, 'GASEOSA', 300, categorias[2]));
productos.push(new Producto(7, 'FLAN', 500, categorias[3]));
productos.push(new Producto(8, 'HELADO', 500, categorias[3]));

// *** QUIERO QUE EL USUARIO INGRESE CUÁNTAS PERSONAS COMEN POR MESA ***

function recogerDatos() {
    let cubiertosCantidad = document.getElementById('ingresoCubiertos').value;
    console.log(cubiertosCantidad);

    localStorage.setItem("personasMesa", cubiertosCantidad)


    let reporteTitulo = document.getElementById('titulo')
    reporteTitulo.innerHTML = `<h3>Usted ha reservado una mesa para ${cubiertosCantidad} persona/s</h3>`

    Toastify({
        text: `Ingreso de ${cubiertosCantidad} persona/s CONFIRMADO!`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            
            background: "linear-gradient(to right, #9b8b3e, #088200)",
          },
    }).showToast();
}

let cubiertoForm = document.getElementById("submitCubiertos");

cubiertoForm.onclick = () => {
    recogerDatos()
}


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


function recogerDatos2() {
    let comanda = document.querySelectorAll('.seleccion');


    localStorage.setItem("comandas", JSON.stringify(comanda));

    for (item of comanda) {
        console.log(item.value);

        let divReporte = document.getElementById('pedir')
        divReporte.innerHTML += `<div>Usted ha ordenado ${item.value}</div>`

    }
}

let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    recogerDatos2()

    Toastify({
        text: "Pedido enviado a la cocina!",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #9b8b3e, #088200)",
          },
    }).showToast();
}


// Evento 

// Funcion mostrar/ocultar reporte

function mostrar() {
    document.getElementById('resumen').style.display = 'block';
}

function ocultar() {
    document.getElementById('resumen').style.display = 'none';
}


let evento = document.getElementById('evento');
evento.onclick = () => {
    mostrar()
}

//Historial

let historialMesas = localStorage.getItem('personasMesa');
console.log(historialMesas);

let historial1 = document.getElementById('conteoMesas');
historial1.innerHTML = `<li>${historialMesas}</li>`

let historialPedidos = JSON.parse(localStorage.getItem('comandas'));
console.log(historialPedidos);

let historial2 = document.getElementById('conteoPedidos');
historial2.innerHTML = `<p>${historialPedidos}</p>`
