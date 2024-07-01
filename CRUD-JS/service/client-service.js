//abrir httpp(metodo, url)

// CRUD - Metodos Httpp
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

//Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());

const createCliente = (nombre, email) =>{
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email, id: uuid.v4()}),
    })
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    })
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
};

const actualizarCliente = (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})
    })
    .then((respuesta) => window.location.href = "../screens/edicion_concluida.html")
    .catch(err => alert("HUbo un error"))
};

export const clienteServices = {
    listaClientes,
    createCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};