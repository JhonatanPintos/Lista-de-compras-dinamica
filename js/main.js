class Productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}
//La idea es que la lista este vacia y el usuario cargue cada producto, puse estos po default para que sea mas facil testear las cosas
let listaProd = [{
        nombre: "televisor",
        precio: 1000,
        cantidad: 1
    },
    {
        nombre: "computadora",
        precio: 2000,
        cantidad: 1
    },
    {
        nombre: "ventilador",
        precio: 5000,
        cantidad: 1
    },
    {
        nombre: "tostadora",
        precio: 200,
        cantidad: 1
    },
    {
        nombre: "estufa",
        precio: 1500,
        cantidad: 1
    },
]

let agregar = document.querySelector("#agregar")
let eliminarProd = document.querySelector("#eliminar")
let totalizar = document.querySelector("#total")

agregar.onclick = () => {
    agregarProducto()
}
eliminar.onclick = () => {
    eliminarProducto()
}
totalizar.onclick = () => {
    totalProds()
}

const agregarProducto = () => {
    //En esta seccion se agregan productos
    let nombre = document.querySelector("#nombre").value
    let precio = parseFloat(document.querySelector("#precio").value)
    let cantidad = parseFloat(document.querySelector("#cantidad").value)
    let prodNuevo = new Productos(nombre, precio, cantidad)
    listaProd.push(prodNuevo)
    escribirLista()
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
            return
        }
    })
}

const totalProds = () => {
    //En esta seccion se totalizara el total de los productos multiplicando sus precios con sus cantidades
    let acumulador = 0
    listaProd.forEach(producto => {
        acumulador += (producto.precio * producto.cantidad)
    })
    let precioTot = document.createElement("p")
    precioTot.innerHTML = `<p>${acumulador}$</p>`
    document.getElementById("precioTotal").appendChild(precioTot)
}