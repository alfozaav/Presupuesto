import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = (props) => {
    //  State
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //  Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    //  Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //  Validar
        if (cantidad < 1 || isNaN( cantidad )) {
            guardarError(true);
            return;
        }

        //  si se pasa la validación
        guardarError(false);
        props.guardarPresupuesto(cantidad);
        props.guardarRestante(cantidad);
        props.actualizarPregunta(false);
    }

    return ( 
       <Fragment>
           <h2>Coloca tu presupuesto</h2>
           {error ? <Error mensaje='El presupuesrto es incorrecto'/> : null}

           <form 
                onSubmit={agregarPresupuesto}
            > 
               <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
               />
               <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
           </form>
       </Fragment>
     );
}
 
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;