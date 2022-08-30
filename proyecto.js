const suma = (a,b) => a + b;
// const resta = (a,b) => a + b;
// const iva = x => x * 0.21;
const cuotas = (a,b) => a / b;
const recargo = x => x * 0.10;


let precioProducto1 = 12500;
let precioProducto2 = 13000;
let precioProducto3 = 9500;

console.log ("televisor " + precioProducto1)
console.log ("celular " + precioProducto2)
console.log ("heladera " + precioProducto3)

const producto = number(prompt("elija que producto desea comprar! " + "televisor " + precioProducto1 + " " +"celular " + precioProducto2 + " " +  "heladera " + precioProducto3));

let number = 0;

while(producto !="0"){ 
    switch  (producto) {
        
        case "1":
            console.log("Televisor " + precioProducto1)
            number += precioProducto1
            break;
        case "2":
            console.log("celular "+ precioProducto2)
            number += precioProducto2
            break;
        case "3":
            console.log("heladera " + precioProducto3)
            number += precioProducto3
            break;
        default: 0;
            break;
}
console.log (number)
producto = prompt("elija otro producto o apriete 0 ")
}

console.log ("La suma de su compra es de " + number)



let precioCuotas = prompt("elija entre efectivo o en 12 cuotas ");


    switch  (precioCuotas) {
        
        case "efectivo":
            console.log("Precio final producto " + number)
            break;
        case "12":
            console.log("en 12 cuotas es "+ suma (cuotas((number),12),cuotas(recargo(number),12)))
            console.log("el precio final es de "+ (number + recargo(number)))
            break;
        default: 0;
            break;
}
