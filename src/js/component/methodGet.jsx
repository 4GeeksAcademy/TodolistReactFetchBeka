import React, { useState, useEffect } from 'react';

const MetodoGet = () => {

    const [get, setGet] = useState(null);

    useEffect(() => {
        fetch('https://playground.4geeks.com/todo/users/beka')
            .then(Response => Response.json())
            .then(data => setGet(data));
    }, []);


    return (
        <div>

            {
                get
                    ? <pre>{JSON.stringify(get, null, 2)}</pre>
                    : <p>Cargando...</p>
            }

        </div>
    )
}


export default MetodoGet