// Definimos un objeto para almacenar los contactos
let contactos = {};

// Función para cargar los contactos en el HTML
function cargarContactos() {
  let listaContactos = document.getElementById('lista-contactos');
  let filasTabla = '';

  // Recorremos el objeto de contactos y creamos una fila HTML por cada contacto
  for (let nombre in contactos) {
    let contacto = contactos[nombre];
    filasTabla += `<tr>
                      <td>${contacto.nombre}</td>
                      <td>${contacto.telefono}</td>
                      <td>${contacto.address}</td>
                      <td><button onclick="eliminarContacto('${nombre}')">Eliminar</button></td>
                   </tr>`;
  
                   
                    console.log(`${nombre}: ${contactos[nombre]}`);
                  
                  }

  // Creamos la tabla HTML con los contactos y la agregamos al HTML
  listaContactos.innerHTML = `<table>
                                 <thead>
                                   <tr>
                                     <th>Nombre</th>
                                     <th>Teléfono</th>
                                     <th>address</th>
                                     <th>Acciones</th>
                                   </tr>
                                 </thead>
                                 <tbody>${filasTabla}</tbody>
                               </table>`;
}

// Función para agregar un nuevo contacto al objeto de contactos
function agregarContacto(nombre, telefono, address) {
  let nuevoContacto = {
    nombre: nombre,
    telefono: telefono,
    address: address
  };
  contactos[nombre] = nuevoContacto;
  cargarContactos();
}

// Función para eliminar un contacto del objeto de contactos y actualizar la lista en el HTML
function eliminarContacto(nombre) {
  delete contactos[nombre];
  cargarContactos();
}