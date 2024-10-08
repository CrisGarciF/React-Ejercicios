import { clienteServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre  = document.querySelector("[data-nombre]").value;

    const email  = document.querySelector("[data-email]").value;

    clienteServices.createCliente(nombre,email)
    .then( () => {
        window.location.href = "../screens/registro_completado.html"
    })
    .catch(err => alert("Error"))
})