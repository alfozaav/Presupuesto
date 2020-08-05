import React from 'react';
import PropTypes from 'prop-types';

const Gasto = (props) => (
    <li className="gastos">
        <p>
            {props.gasto.nombre}
            <span className="gasto">$ {props.gasto.cantidad}</span>
        </p>
    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;