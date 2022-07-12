class Productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}
let listaProd = [
    {nombre: "televisor", precio: 1000, cantidad: 1},
    {nombre: "computadora", precio: 2000, cantidad: 1},
    {nombre: "ventilador", precio: 5000, cantidad: 1},
    {nombre: "tostadora", precio: 200, cantidad: 1},
    {nombre: "estufa", precio: 1500, cantidad: 1},
    {nombre: "computadora", precio: 3000, cantidad: 1},
]
let opciones
do {
    opciones = parseInt(prompt("Que de sea hacer?\n Elija una opcion \n 1.Agregar Producto \n 2.Modificar o eliminar un producto \n 3.Mostrar Lista"))
    if (opciones == 1) {
        //Opcion 1 es para agregar el nombre, preio y cantidad de los productos
        let opciones1
        do {
            opciones1 = parseInt(prompt("Elija una opcion \n 1.Agregar Producto \n 2.Volver al inicio"))
            if (opciones1 == 1) {
                const agregarProducto = () => {
                    //En esta etapa se definira y confirmara el nombre del o los productos
                    let nombre = prompt("Ingrese el nombre de su prducto")
                    let confirmar1 = prompt(`Este es su producto "${nombre}"? \n Elija opcion 1 o 2 \n 1.Si \n 2.No`)
                    if (confirmar1 == 1) {
                        //En esta etapa se confirma el precio del o los productos
                        let precio = parseFloat(prompt("Ingrese el precio del prducto"))
                        let confirmar2 = prompt(`Este es su precio? "${precio}$" \n Elija opcion 1 o 2 \n 1.Si \n 2.No`)
                        if (confirmar2 == 1) {
                            //En esta etapa se confirma la cantidad de los productos
                            let cantidad = prompt("cuantos van a ser?")
                            let confirmar3 = prompt(`La cantidad es correcta? "${cantidad}" \n Elija opcion 1 o 2 \n 1.Si \n 2.No`)
                            if (confirmar3 == 1) {
                                //En esta estapa se termina de agregar los datos y se pushean a nuestro "array"
                                let prod = new Productos(nombre, precio, cantidad)
                                listaProd.push(prod)
                                alert(`El producto "${nombre}" fue agregado con exito`)
                            } else {
                                alert("Ingrese los datos nuevamente")
                            }
                        } else {
                            alert("Ingrese los datos nuevamente")
                        }
                    } else {
                        alert("Ingrese los datos nuevamente")
                    }
                }
                agregarProducto()
            }
        } while (opciones1 != "2")
    }
    if (opciones == 2) {
        //LO QUE FALTA ES PARA EL JUEVES
        //Opcion 2 es para modificar o eliminar un producto de la lista
        for (let  i=0; i<listaProd.length; i++){
            console.log(listaProd[i])
        }
        let eliminar = listaProd.findIndex(nombreE => {
            return nombreE.nombre === prompt("prod borrar")
        })
        console.log(eliminar)
    }
} while (opciones != "3")
listaProd.forEach(producto => {
    console.log(`El nombre del preducto es "${producto.nombre}" su precio es de "${producto.precio}$" y su cantidad de "${producto.cantidad}" su total seria ${producto.precio * producto.cantidad}$`)
})