
//LLAMADO DE FUNCIONES

// 1. Se creo una lista de contactos con datos predefinidos, 
// cada contacto debe contener el nombre y apellido como 
// una sola cadena de caracteres

const lisContactos = crearListaContactos()
// 2. Se llamo la función para añadir un nuevo contacto a una lista
// pero priero se creo el dato a eliminar "Leonardo Fierro"
console.log("Lista de contactos creada =",lisContactos);
const nombreCompleto= "leoannaro fierro";
agregarContacto(nombreCompleto,lisContactos)
console.log("Se agrego un contacto a la lista =",lisContactos);
// 3. Se llamo la función para borrar un contacto  de la lista en caso de no existir lo informaria

  const contactoElim = "Maria Garcia"
const respuesta = (borrarContacto(lisContactos,contactoElim))

// 4. se llamo la funcio imprimir lista de contactos

console.log("Despue de eliminar el contacto =",respuesta);


//CREACION DE FUNCIONES

//Funcion Crear Lista decontactos se creo con 3 contactos


function crearListaContactos() {
    const contactos = ["Juan Perez", "Maria Garcia", "Luisa Martinez"];
    return contactos;
  }

;
//Funcion Agregar contacto nuevo a la  Lista decontactos

function agregarContacto(nombreCompleto,lisContactos) {
    
    //const contac = listaContactos +  nombreCompleto;
    lisContactos.push(nombreCompleto);
    return lisContactos;
  }
  
//Funcion Borrar contacto nuevo a la  Lista decontactos

 function borrarContacto(lista, contacto) {
  const index = lista.indexOf(contacto);
  if (index!== -1) {
    lista.splice(index,1);
  } else {
    console.log("El contacto no existe en la lista.");
  }
  return lista;
}

/*  Otro Metodo para Borrar un elemento de la lista con (filter)
function borrarCadena(lista, cadena) {
  const nuevaLista = lista.filter(item => item !== cadena);
  return nuevaLista;
}
*/
// Funcion imprimir lista de contactos
function imprimir (lista){
  console.log(lista)
}



