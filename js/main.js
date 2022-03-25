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

// Toastify nombre

function toastiNombre() {

    let nombreToasti = document.getElementById('ingresoNombre').value;

    Toastify({
        text: `Bienvenidx ${nombreToasti}!`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {

            background: "linear-gradient(to right, #9b8b3e, #088200)",
        },
    }).showToast();

}


let nombreForm = document.getElementById('submitNombre');

nombreForm.onclick = () => {
    toastiNombre();
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

    let pedidoStorage = JSON.parse(localStorage.getItem('comandas')) || [];

    pedidoStorage.push(pedido);

    let pedidoStorageJSON = JSON.stringify(pedidoStorage);

    localStorage.setItem('comandas', pedidoStorageJSON) || [];




    let listaOrden = "";
    pedido.orden.forEach(item => {
        listaOrden += `<li>${item.nombre}</li>`;
    });


    let divReporte = document.getElementById('pedir')
    divReporte.innerHTML = `<div>Usted ha ordenado: <ul>${listaOrden}</ul>
                            <span class="total">El total a pagar es: $${pedido.total}</span>
                            </div>`

    console.log("pedido: ", pedido);
    console.log("pedidos: ", pedidos);
}

let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    crearPedido();
    Toastify({
        text: `Pedido creado!`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {

            background: "linear-gradient(to right, #9b8b3e, #088200)",
        },
    }).showToast();

}

//     ****** Resumen del pedido ******


//            CUBIERTOS

/*              Función para:
 - Mostrar cubiertos ingresados dinámicamente en HTML
 - Guardar la misma información en localStorage
*/

function recogerDatos() {
    let cubiertosCantidad = document.getElementById('ingresoCubiertos').value;

    let cubArray = JSON.parse(localStorage.getItem("personasMesa")) || [];
    cubArray.push(cubiertosCantidad);
    let cubArrayJSON = JSON.stringify(cubArray);

    localStorage.setItem("personasMesa", cubArrayJSON) || [];


    Toastify({
        text: `Ingreso de ${cubiertosCantidad} persona/s CONFIRMADO!`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {

            background: "linear-gradient(to right, #9b8b3e, #088200)",
        },
    }).showToast();

    let reporteTitulo = document.getElementById('titulo')
    reporteTitulo.innerHTML = `<h3>Usted ha reservado una mesa para ${cubiertosCantidad} persona/s</h3>`

}

// Botón que llama la función anterior

let cubiertoForm = document.getElementById("submitCubiertos");

cubiertoForm.onclick = () => {
    recogerDatos(),
        mostarHistorialCubiertos()
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

let refresh = document.getElementById("refresh");

refresh.onclick = () => {
    location.reload()
}

// Fetch

let url = 'http://api.weatherapi.com/v1/current.json?key=23fc3ba8bf934f2d8f8195549221103&q=Ushuaia&aqi=no';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    document.getElementById('wx').innerHTML = `<p>Actualmente la temperatura en la ciudad de Ushuaia es de ${data.current.temp_c}º</p><p>La velocidad del viento es de ${data.current.wind_kph}km/h y proviene de los ${data.current.wind_degree}º</p><img src=${data.current.condition.icon}>`;

}

//Función para mostrar historial de cubiertos

function mostarHistorialCubiertos() {

    let personasMesaArray = JSON.parse(localStorage.getItem("personasMesa"))

    let conteoMesas = document.getElementById('conteoMesas')

    conteoMesas.innerHTML = `El historial de cubiertos por mesas del día de hoy es el siguiente: ${personasMesaArray}`;

}

mostarHistorialCubiertos()

// Historial comandas

let pedidosStorageArray = JSON.parse(localStorage.getItem("comandas"))

let conteoPedidosDiv = document.getElementById('conteoPedidos')

console.log(pedidosStorageArray);


if (pedidosStorageArray) {
    for (let i = 0; i < pedidosStorageArray.length; i++) {

        // Acceder al objeto del arreglo en la posicion "i"
        conteoPedidosDiv.innerHTML += ` Orden número: ${pedidosStorageArray[i].id}<br>
                                        Nombre: ${pedidosStorageArray[i].nombre}<br>
                                        Cubiertos: ${pedidosStorageArray[i].cubiertos}<br>
                                        Total: $${pedidosStorageArray[i].total}<br>
                                        <hr>`
    }
}


// Borrar todo

let borrarHistorial = document.getElementById("borrar");

borrarHistorial.onclick = () => {
    localStorage.clear()
    location.reload()
}

