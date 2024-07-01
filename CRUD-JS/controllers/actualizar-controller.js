import { clienteServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "../screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]")
    const email = document.querySelector("[data-email]")

    try{
        const perfil = await clienteServices.detalleCliente(id);
        if(perfil){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else {
            throw new Error();
        }
    }catch(error){
        window.location.href = "../screens/error.html";
    }
};

obtenerInfo();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clienteServices.actualizarCliente(nombre,email,id);
});