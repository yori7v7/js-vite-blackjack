import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

// Esto no se debería hacer ya que debemos tratar de hacer una función que haga las cosas independientemente.

/**
 * turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas.
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [ ]) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    /* if ( !deck ) throw new Error('El deck es necesario'); */ // Se puede obviar.
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}