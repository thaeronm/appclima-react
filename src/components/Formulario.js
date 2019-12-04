import React, { useState } from 'react';

function Formulario({datosConsulta}) {

    const [busqueda, guardarBusqueda] = useState ({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(busqueda);
    }

    return(
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="VE">Venezuela</option>
                    <option value="ES">España</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima"
                />
            </div>
        </form>
    )
}
export default Formulario