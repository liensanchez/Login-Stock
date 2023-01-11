const { configureStore } = require ("redux"); 
const user = require("../reducer/reducer");
const { iniciar_sesion, registro } = require("../actions/actions"); 

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = configureStore(user);

// Obtenemos el elemento con el id `valor`.
var nombre = document.querySelector('#nombre')

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const usuario = store.getState().user;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  nombre.innerHTML = usuario
}

// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)


// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
const incrementoButton = document.querySelector('#verNombre')

incrementoButton.addEventListener('click', () => {
  console.log('hola');
})

incrementoButton.addEventListener('click', () => {
  store.dispatch(iniciar_sesion())
})
