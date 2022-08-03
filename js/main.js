class Productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}
//Document sobre las listas
let borrarList = document.querySelector("#borrarList")
let editarList = document.querySelector("#editarList")
let selectList = document.querySelector("#selectList")


editarList.onclick = () => {
    crearNombreList()
}

borrarList.onclick = () => {
    borrarLista()
}


//LISTAS
selectList.onchange = () => {
    console.log(selectList.value)
    listaProd = JSON.parse(localStorage.getItem(selectList.value)) || []
}

const crearNombreList = () => {
    let listaNueva = document.querySelector("#listaNueva").value
    let nodo = document.createElement("option")
    nodo.className = "lista"
    nodo.setAttribute("value", listaNueva)
    nodo.setAttribute("id", listaNueva)
    nodo.innerText = listaNueva
    document.getElementById("selectList").appendChild(nodo)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Tu nueva Lista "${listaNueva}" fue creada con exito`,
        showConfirmButton: false,
        timer: 2000
    })
}

const borrarLista = () => {
    Swal.fire({
        title: `Estas seguro de eliminar "${document.querySelector("#listaNueva").value}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "No, cancelar!",
        confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
        if (result.isConfirmed) {
            let listaNueva = document.querySelector("#listaNueva").value
            localStorage.removeItem(listaNueva)
            let selectL = document.getElementById("selectList").childNodes
            selectL.forEach(lista => {
                if (lista.value == listaNueva) {
                    document.getElementById("selectList").removeChild(lista)
                }
            })
            Swal.fire(
                'Eliminado!',
                `${listaNueva} fue eliminado con exito`,
                'success'
            )
        }
    })


}
//Document sobre los botones
let agregar = document.querySelector("#agregar")
let eliminarProd = document.querySelector("#eliminar")
let mostrar = document.querySelector("#mostrar")
let totalizar = document.querySelector("#total")

agregar.onclick = () => {
    agregarProducto()
}
eliminar.onclick = () => {
    eliminarProducto()
}
mostrar.onclick = () => {
    mostrarLista()
}
totalizar.onclick = () => {
    totalProds()
}

const agregarProducto = () => {
    //En esta seccion se agregan productos
    let nombre = document.querySelector("#nombre").value
    let precio = parseInt(document.querySelector("#precio").value)
    let cantidad = parseInt(document.querySelector("#cantidad").value)
    let prodNuevo = new Productos(nombre, precio, cantidad)
    listaProd.push(prodNuevo)
    localStorage.setItem(selectList.value, JSON.stringify(listaProd))
    escribirLista()
    Toastify({
        text: `Producto agregado`,
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
            // ROJO background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    return prodNuevo
}
const escribirLista = () => {
    //En esta seccion se agregan y muestran los productos dentro de la lista en el HTML
    document.getElementById("listaProd").innerHTML = ""
    listaProd.forEach(producto => {
        let nodo = document.createElement("div")
        nodo.className = "prods"
        nodo.setAttribute("id", producto.nombre)
        nodo.innerHTML = `<p>${producto.nombre}</p>
                        <p>${producto.precio}</p>
                        <p>${producto.cantidad}</p>`
        document.getElementById("listaProd").appendChild(nodo)
    })
}
const eliminarProducto = () => {
    //En esta seccion se eliminan productos
    let eliminar = document.querySelector("#nombre").value
    listaProd.forEach((prod, index) => {
        if (prod.nombre == eliminar) {
            listaProd.splice(index, 1)
            escribirLista()
            Toastify({
                text: `Producto eliminado`,
                duration: 3000,
                gravity: "top",
                position: "center",
                style: {
                    background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
                }
            }).showToast();
            return
        }
    })
}

const mostrarLista = () => {
    //En esta seccion solo se imprimira la lista en el HTML
    document.getElementById("listaProd").innerHTML = ""
    listaProd.forEach(producto => {
        let nodo = document.createElement("div")
        nodo.className = "prods"
        nodo.setAttribute("id", producto.nombre)
        nodo.innerHTML = `<p>${producto.nombre}</p>
                        <p>${producto.precio}</p>
                        <p>${producto.cantidad}</p>`
        document.getElementById("listaProd").appendChild(nodo)
    })
}

const totalProds = () => {
    //En esta seccion se totalizara el total de los productos multiplicando sus precios con sus cantidades
    let acumulador = 0
    listaProd.forEach(producto => {
        acumulador += (producto.precio * producto.cantidad)
    })
    Swal.fire(`El total de su compra es de $${acumulador}`)
}