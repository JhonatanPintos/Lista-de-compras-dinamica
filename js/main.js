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
let opciones
do {
    opciones = parseInt(prompt("Que de sea hacer?\n Elija una opcion \n 1.Agregar Producto \n 2.Modificar o eliminar un producto \n 3.Mostrar y totalizar Lista \n 4.Salir de la aplicacion"))
    if (opciones == 1) {
        //Opcion 1 - es para agregar el nombre, preio y cantidad de los productos
        let opciones1
        do {
            opciones1 = parseInt(prompt("Elija una opcion \n 1.Agregar Producto \n 2.Volver al inicio"))
            if (opciones1 == 1) {
                const agregarProducto = () => {
                    //En esta etapa se definira y confirmara el nombre del o los productos
                    let nombre = prompt("Ingrese el nombre de su producto")
                    let confirmar1 = prompt(`Este es su producto "${nombre}"? \n Elija opcion 1 o 2 \n 1.Si \n 2.No`)
                    if (confirmar1 == 1) {
                        //En esta etapa se confirma el precio del o los productos
                        let precio = parseFloat(prompt("Ingrese el precio del producto"))
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
        //Opcion 2 - es para modificar o eliminar un producto de la lista
        let opciones2
        do {
            //Aca se define si se "elimina" o "modifica" el producto que el usuariuo desee
            opciones2 = parseInt(prompt("Elija una opcion \n 1.Eliminar Producto \n 2.Modificar Producto \n 3.Volver al inicio"))
            if (opciones2 == 1) {
                //En este caso/opcion se elimina el producto
                alert(`Cual de estos productos desea eliminar?\n ${JSON.stringify(listaProd)}`)
                let eliminar = prompt("Ingrese el nombre del producto desee eliminar")
                listaProd.forEach((prod, index) => {
                    if (prod.nombre == eliminar) {
                        listaProd.splice(index, 1)
                        alert(`El producto "${eliminar}" fue eliminado con exito`)
                        alert(`Su lista quedo conformada de esta manera\n ${JSON.stringify(listaProd)}`)
                    }
                })
            }
            if(opciones2 == 2){
                //En este caso/opcion se modifica un producto eliminandolo e instantanemanete cargando uno nuevo
                alert(`Cual de estos productos desea modificar?\n ${JSON.stringify(listaProd)}`)
                let modificar = prompt("Ingrese el nombre del producto desee modificar")
                listaProd.forEach((prod2, index2) => {
                    if (prod2.nombre == modificar) {
                        listaProd.splice(index2, 1)
                        let nombre2 = prompt("Ingrese el nuevo nombre del producto")
                        let precio2 = prompt("Ingrese el nuevo precio del producto")
                        let cantidad2 = prompt("Ingrese la cantidad del producto")
                        let prod2 = new Productos(nombre2, precio2, cantidad2)
                        listaProd.push(prod2)
                        alert(`El producto "${modificar}" fue modificado con exito`)
                        alert(`Su lista quedo conformada de esta manera\n ${JSON.stringify(listaProd)}`)
                    }
                })
            }
        } while (opciones2 != "3")
    }
    if (opciones == 3) {
        //Opcion 3 - En este caso/opcion se muestra y totaliza la lista completa, mostrando asi sus nombres, precios y cantidades los cuales son totalizados individualmente y luego se totalizan todos los producto que tenga la lista
        let acumulador = 0
        listaProd.forEach(producto => {
            acumulador += (producto.precio * producto.cantidad)
            console.log(`El nombre del preducto es "${producto.nombre}" su precio es de "${producto.precio}$" y su cantidad es de "${producto.cantidad}" su total seria ${producto.precio * producto.cantidad}$`)
        })
        console.log(`La compra total de sus productos tiene un total de "${acumulador}$"`)
    }
} while (opciones != "4")
//Opcion 4 - se sale de la aplicacion
alert("gracias por utilizar nuestra aplicacion!")