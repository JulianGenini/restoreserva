/*

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


*/




// //Historial

// let historialMesas = localStorage.getItem('personasMesa');

// let historial1 = document.getElementById('conteoMesas');
// historial1.innerHTML = `<li>${historialMesas}</li>`

// let historialPedidos = JSON.parse(localStorage.getItem('comandas'));

// let historial2 = document.getElementById('conteoPedidos');
// historial2.innerHTML = `<p>${historialPedidos}</p>`