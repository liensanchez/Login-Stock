const {INICIAR_SESION,REGISTRO} = require('../action-type/action-type');

const initialState = {
    user : {
      username:'prueba',
      password:''
  }
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function user(state = initialState, action) { 
  switch (action.type) {
    case INICIAR_SESION:
      //siempre un return con una copia del state
      return{
        ...state,

      }

  
    case REGISTRO:
      return{
        ...state,
        contador: state.contador -1
      }
    
    default:
      return {...state}
  }
}

module.exports = user;