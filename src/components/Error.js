import React from 'react'
import PropTypes from 'prop-types';

const Error = (props) => (
<p className="alert alert-danger error">{props.mensaje}</p>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;