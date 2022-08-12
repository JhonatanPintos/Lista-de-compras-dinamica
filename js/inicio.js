//JS DE INICIO DE SESION

let boton1 = document.querySelector("#botonEntrar")
let boton2 = document.querySelector("#prueba")

let nombreUsuarioNuevo = document.querySelector("#nombreUsuarioNuevo")
let emailUsuarioNuevo = document.querySelector("#emailUsuarioNuevo")
let contraUsuarioNuevo = document.querySelector("#contraUsuarioNuevo")




boton2.onclick = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Redireccionando',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {
        window.location.href = ("index.html")
    }, 1700)
}


boton1.onclick = (e) => {
    e.preventDefault()
    obtenerDatos()
}

const obtenerDatos = () => {
    fetch("../cuentas.json")
        .then(response => response.json())
        .then(result => {
            let datos = result
            let nombreUsuario = document.querySelector("#nombreUsuario").value
            let emailUsuario = document.querySelector("#emailUsuario").value
            let contraUsuario = document.querySelector("#contraUsuario").value
            let buscarUsuarioNombre = datos.some(data => data.nombre == nombreUsuario)
            let buscarUsuarioEmail = datos.some(data => data.email == emailUsuario)
            let buscarUsuarioContraseña = datos.some(data => data.contraseña == contraUsuario)
            console.log(nombreUsuario)
            console.log(buscarUsuarioNombre)
            console.log(buscarUsuarioEmail)
            console.log(buscarUsuarioContraseña)
            if (buscarUsuarioNombre == true) {
                console.log("nombre aprobado")
                if (buscarUsuarioEmail == true) {
                    console.log("email aprobado")
                    if (buscarUsuarioContraseña == true) {
                        console.log("contrseña aprobado")
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Redireccionando',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setTimeout(() => {
                            window.location.href = ("index.html")
                        }, 1700)
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error en la contrseña!',
                        })
                        console.log("error contrseña")
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error en el email!',
                    })
                    console.log("error email")
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error en el nombre!',
                })
                console.log("error nombre")
            }
        })
}