//Reserva de mesas

////////////////////////////////////////////////////////////
// *** ARRAYS ***

const categorias = ['ENTRADAS', 'PLATOS', 'BEBIDAS', 'POSTRES'];

// Array vacio para usar con objetos
const productos = [];

//Array para usar con Pedido
const pedidos = [];

// Objetos

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

class Pedido {
    constructor(id, nombre, cubiertos, orden, total) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.cubiertos = parseInt(cubiertos);
        this.orden = orden; //array productos pedidos!
        this.total = this.orden.reduce((sum, item) => sum + item.precio, 0);
    }
}

// Método push para agregar objetos al array

productos.push(new Producto(1, 'ENSALADA', 500, categorias[0]));
productos.push(new Producto(2, 'PORCIÓN FRITAS', 500, categorias[0]));
productos.push(new Producto(3, 'CORDERO', 2000, categorias[1]));
productos.push(new Producto(4, 'TRUCHA', 2000, categorias[1]));
productos.push(new Producto(5, 'AGUA', 200, categorias[2]));
productos.push(new Producto(6, 'GASEOSA', 300, categorias[2]));
productos.push(new Producto(7, 'FLAN', 500, categorias[3]));
productos.push(new Producto(8, 'HELADO', 500, categorias[3]));

// Funciones para obtener datos del form

function obtenerNombre() {
    let obtenerN = document.getElementById('ingresoNombre').value;
    return obtenerN;
}

function obtenerCubiertos() {
    let obtenerC = document.getElementById('ingresoCubiertos').value;
    return obtenerC;
}

// Funcion con método

function obtenerDato(id) {
    let dato = document.getElementById(id).value;
    return productos.find(item => item.nombre == dato);
}

function obtenerPedido() {
    const pedido = [obtenerDato('entrada'),
    obtenerDato('principal'),
    obtenerDato('postre'),
    obtenerDato('bebida')];
    return pedido;
}

function crearPedido() {
    let pedido = new Pedido(pedidos.length + 1, obtenerNombre(), obtenerCubiertos(), obtenerPedido())
    pedidos.push(pedido);

    localStorage.setItem("comandas", JSON.stringify(pedido));

    let divReporte = document.getElementById('pedir')
    divReporte.innerHTML = `<div>Usted ha ordenado ${pedido}</div>`

    console.log("pedido: ", pedido);
    console.log("pedidos: ", pedidos);
}

let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    crearPedido();
    // recogerDatos2()
}

/* 

            **** HASTA ACA OK ****

*/

//     ****** Resumen del pedido ******


//            CUBIERTOS

/*              Función para:
 - Mostrar cubiertos ingresados dinámicamente en HTML
 - Guardar la misma información en localStorage
*/

function recogerDatos() {
    let cubiertosCantidad = document.getElementById('ingresoCubiertos').value;
    console.log(cubiertosCantidad);

    localStorage.setItem("personasMesa", cubiertosCantidad)


    let reporteTitulo = document.getElementById('titulo')
    reporteTitulo.innerHTML = `<h3>Usted ha reservado una mesa para ${cubiertosCantidad} persona/s</h3>`
}

// Botón que llama la función anterior

let cubiertoForm = document.getElementById("submitCubiertos");

cubiertoForm.onclick = () => {
    recogerDatos()
}

// Mostrar/ocultar reporte

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

let historial1 = document.getElementById('conteoMesas');
historial1.innerHTML = `<li>${historialMesas}</li>`

let historialPedidos = JSON.parse(localStorage.getItem('comandas'));
historialPedidos = JSON.stringify(historialPedidos)
console.log(historialPedidos);

let historial2 = document.getElementById('conteoPedidos');
historial2.innerHTML = `<h3>Numero de pedido: ${historialPedidos.id}</h3>
                        <h3>A nombre de: ${historialPedidos.nombre}</h3>
                        <h4>Personas en la mesa: ${historialPedidos.cubiertos}</h4>
                        <h4>Su orden es la siguiente:</h4>
                        <p>${historialPedidos.orden}</p>`
