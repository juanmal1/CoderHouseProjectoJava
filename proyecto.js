const suma = (a,b) => a + b;
// const resta = (a,b) => a + b;
// const iva = x => x * 0.21;
const cuotas = (a,b) => a / b;
const recargo = x => x * 0.25;

const productos = [
    {
        nombre: "Televisor",
        precio: 15500,
        stock: 3
    },
    {
        nombre: "Celular",
        precio: 13000,
        stock: 5
    },
    {
        nombre: "Heladera",
        precio: 9500,
        stock: 2
    }
]

let nuevoArray = productos.filter((elemento) => elemento.stock > 2)

console.table(nuevoArray);

console.table(productos);

alert("bienvenido a tienda JM")

let producto = prompt("elija que producto desea comprar!:\n1. televisor\n2. Celular\n3. Heladera\n0.Salir ");
const carrito = [];

while(producto !="0"){ 
    switch  (producto) {
        case "1":
            if(productos[0].stock > 0){
                carrito.push(productos[0].precio)
                productos[0].stock -= 1
            }else{
                alert("no hay stock")
            }
            alert('agregaste televisor al carrito')
            break;
        case "2":
            if(productos[1].stock > 0){
                carrito.push(productos[1].precio)
                productos[1].stock -= 1
            }else{
                alert("no hay stock")
            }
            alert('agregaste celular al carrito')
            break;
        case "3":
            if(productos[2].stock > 0){
                carrito.push(productos[2].precio)
                productos[2].stock -= 1
            }else{
                alert("no hay stock")
            }
            alert('agregaste heladera al carrito')
            break;
        default: 0;
        alert('elija un producto de la lista')
            break;
    }
    console.log(carrito)
    producto = prompt("elija otro producto desea comprar!:\n1. televisor\n2. Celular\n3. Heladera\n0.Salir ")
}

let total = 0; for(let i of carrito) total+=i;
alert('el total te la compra es ' + total)

let precioCuotas = prompt("elija entre efectivo o en 12 cuotas ");
    switch  (precioCuotas) {
        case "efectivo":
            alert("Precio final producto " + total)
            break;
        case "12":
            alert("el total es de 12 cuotas de "+ suma (cuotas((total),12),cuotas(recargo(total),12)))
            alert("el precio final es de "+ (total + recargo(total)))
            break;
        default: 0;
            break;
    }



console.log("PRODUCTOS DISPONIBLES");


console.table(productos)




alert("gracias por comprar en tienda JM")
