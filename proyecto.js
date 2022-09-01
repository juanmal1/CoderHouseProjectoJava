const suma = (a,b) => a + b;
// const resta = (a,b) => a + b;
// const iva = x => x * 0.21;
const cuotas = (a,b) => a / b;
const recargo = x => x * 0.10;

const Prod = [
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
console.table(Prod);

alert("bienvenido a tienda JM")

let producto = prompt("elija que producto desea comprar! ");
const carrito = [];

while(producto !="0"){ 
    switch  (producto) {
        case "1":
            if(Prod[0].stock > 0){
                carrito.push(Prod[0].precio)
                Prod[0].stock -= 1
            }else{
                alert("Pa no hay stock")
            }
            break;
        case "2":
            if(Prod[1].stock > 0){
                carrito.push(Prod[1].precio)
                Prod[1].stock -= 1
            }else{
                alert("Pa no hay stock")
            }
            break;
        case "3":
            if(Prod[2].stock > 0){
                carrito.push(Prod[2].precio)
                Prod[2].stock -= 1
            }else{
                alert("Pa no hay stock")
            }
            break;
        default: 0;
            break;
    }
    console.log(carrito)
    producto = prompt("elija otro producto o apriete 0 ")
}

let total = 0; for(let i of carrito) total+=i;
console.log(total)

let precioCuotas = prompt("elija entre efectivo o en 12 cuotas ");
    switch  (precioCuotas) {
        case "efectivo":
            console.log("Precio final producto " + total)
            break;
        case "12":
            console.log("en 12 cuotas es "+ suma (cuotas((total),12),cuotas(recargo(total),12)))
            console.log("el precio final es de "+ (total + recargo(total)))
            break;
        default: 0;
            break;
    }
    
console.log("PRODUCTOS DISPONIBLES");
console.table(Prod)

console.log("gracias por comprar en tienda JM")
