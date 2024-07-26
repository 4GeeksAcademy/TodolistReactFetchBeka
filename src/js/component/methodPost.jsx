import React, { useState, useEffect } from 'react';

const MetodoPost = () => {

    const [post, setPost] = useState(null);

    const nuevosDatosPost = {
        title: "beka",
        UserId: 25,
    }

    useEffect(() => {
        fetch('https://playground.4geeks.com/todo/todos/beka', {
            method: "POST",
            body: JSON.stringify(nuevosDatosPost),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setPost(data));
    }, []);


    return (
        <div>

            {
                post
                    ? <pre>{JSON.stringify(post, null, 2)}</pre>
                    : <p>Cargando...</p>
            }

        </div>
    )
}


export default MetodoPost 