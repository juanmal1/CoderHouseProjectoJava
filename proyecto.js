
// let Producto = prompt('elija un producto')
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

let producto = prompt("elija que producto desea comprar!");

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
producto = prompt("elija otro producto o apriete ESC")
}

console.log ("La suma de su compra es de " + number)



let precioCuotas = prompt("elija entre efectivo o en 12 cuotas");


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




// let nuevoPrecio1 = resta(suma(precioProducto1, iva(precioProducto1)),descuento);

// let nuevoPrecio2 = resta(suma(precioProducto2, iva(precioProducto2)),descuento);

// let nuevoPrecio3 = resta(suma(precioProducto3, iva(precioProducto3)),descuento);

// console.log (nuevoPrecio1);
// console.log (nuevoPrecio2);
// console.log (nuevoPrecio3);



// let nuevoPrecio4 = suma (cuotas((precioProducto1),12),cuotas(recargo(precioProducto1),12));
// let nuevoPrecio5 = cuotas (precioProducto1,12)


// console.log (nuevoPrecio4)