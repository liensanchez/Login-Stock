const {INICIAR_SESION,REGISTRO} = require('../action-type/action-type');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const iniciar_sesion= () => {
  return {type: INICIAR_SESION}
};


//action creator, es la funcion   que retorna el objeto action, es mejor usar este metodo q el de arriba
const registro = () => {
  return {type: REGISTRO}
};

module.exports = {
  iniciar_sesion,
  registro
}