
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;

const mensaje = `Bienvenido/a, ${nombre} ${apellido}!`;
document.getElementById('resultado').textContent = mensaje;