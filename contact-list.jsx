let contactList = document.getElementById("contactList");
		let idInput = document.getElementById("idInput");
        let nameInput = document.getElementById("nameInput");
		let surnamesInput = document.getElementById("surnamesInput");
        let phoneInput = document.getElementById("phoneInput");
		let cityInput = document.getElementById("cityInput");
        let addressInput = document.getElementById("addressInput");
        let contacts = [];

        function addContact() {
            let id = idInput.value;
			let name = nameInput.value;
			let surnames = surnamesInput.value;
            let phone = phoneInput.value;
			let city = cityInput.value;
            let address = addressInput.value;

            if (name && phone && address) {
                let contact = {
                    id:id,
					name: name,
					surnames:surnames,
                    phone: phone,
					city:city,
                    address: address


                };
                contacts.push(contact);
                displayContacts();
                idInput.value = "";
				nameInput.value = "";
				surnames.value == ""
                phoneInput.value = "";
				cityInput.value = "";
                addressInput.value = "";
            }
        }
/*
Se declara una variable llamada index y se le 
asigna el índice del elemento seleccionado dentro 
de la lista de elementos hijos del elemento contactList.
 La función Array.from se utiliza para convertir los
   elementos en un array y luego se utiliza el método indexOf 
  para sacar de el índice del elemento seleccionado en ese array.*/

       function removeContact() {
            let selected = contactList.querySelector(".selected");
            if (selected) {
                let index = Array.from(contactList.children).indexOf(selected);
                contacts.splice(index, 1);
                displayContacts();
            }
        }
/*Actualiza la lista de contactos 
 recorre el array contacts. 
 se crea un nuevo elemento de lista (<li>) y se le asigna el contenido las propiedades del objeto contact.
 Se envia elemento li como hijo del elemento contactList, lo que actualiza la interfaz de los contacto
 */
        function displayContacts() {
            contactList.innerHTML = "";
            for (let contact of contacts) {
                let li = document.createElement("li");
                li.textContent = contact.id +" - " + contact.name + " - " + contact.surnames + " - "  + contact.phone + " - " + contact.city + " - " + contact.address;
                contactList.appendChild(li);
            }
        }
       /* aeste código se encarga del  
        evento de clic en el elemento contactList. 
        Cuando se hace clic en un elemento de lista <li>, se selecciona 
            ese elemento al agregarle la clase "selected". Si ya
             había un elemento seleccionado anteriormente, se deselecciona 
            eliminando la clase "selected" de ese elemento.
             Esto permite que solo se selecione de uno a uno a la vez.
             */
        contactList.onclick = function(event) {
            let target = event.target;
            if (target.tagName === "LI") {
                let selected = contactList.querySelector(".selected");
                if (selected) {
                    selected.classList.remove("selected");
                }
                target.classList.add("selected");
            }
        }