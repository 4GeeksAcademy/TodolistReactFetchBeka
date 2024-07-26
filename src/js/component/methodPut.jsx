import React, { useState, useEffect } from 'react';

const MetodoPut = () => {

    const [put, setPut] = useState(null);

    const nuevosDatosput = {
        label: "ACTUALIZADO",
    }

    useEffect(() => {
        fetch('https://playground.4geeks.com/todo/todos/136', {
            method: "PUT",
            body: JSON.stringify(nuevosDatosput),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setPut(data));
    }, []);


    return (
        <div>

            {
                put
                    ? <pre>{JSON.stringify(put, null, 2)}</pre>
                    : <p>Cargando...</p>
            }

        </div>
    )
}


export default MetodoPut 