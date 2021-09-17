document.addEventListener('DOMContentLoaded', () => {

       //Objetos 
       class Productos {
        constructor(keyboard, model, price, stock){
            this.keyboard = keyboard;
            this.model = model;
            this.price = Number(price);
            this.stock = parseInt(stock);
        }

        vender (cantidad, cart) {
            if (cantidad <= this.stock){
                alert('Tenemos stock disponible');
                cart += this.price * cantidad;
                this.stock -= cantidad;
                console.log(cart, this.stock)
                return cart;
            }else{
                alert('Discula, no hay stock suficiente, prueba menos cantidad');
                return cart;
            }
        }

    }

    
    const vintageUno = new Productos ('Vintage', '1', 319.99, 10);
    const vintageDos = new Productos ('Vintage', '2', 219.99, 10);
    const vintageTres = new Productos ('Vintage', '3', 189.99, 10);
    const gamerUno = new Productos ('Gamer', '1', 199.99, 10);
    const gamerDos = new Productos ('Gamer', '2', 150, 10);
    const gamerTres = new Productos ('Gamer', '3', 119.99, 10);
    const clasico = new Productos ('Clasico', '1', 419.99, 10);

        
    // acumulador 
    let cart = 0;
    let respuesta = "";

    //funciones    
    //Esta funcion deberia ir acumulando / sumando la eleccion del teclado y modelo usuario al carrito
    let addToCart = (keyboard, model, cart, cantidad) => {
        
        if (keyboard === 'Gamer' && model == 1){
            cart = gamerUno.vender(cantidad, cart);
            alert(`llevas gastado ${cart}`)
        } else if (keyboard === 'Gamer' && model == 2){
            cart = gamerDos.vender(cantidad, cart);
            alert(`llevas gastado ${cart}`)
        } else if (keyboard === 'Gamer' && model == 3){
            cart = gamerTres.vender(cantidad, cart);
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Vintage' && model == 1){
            cart = vintageUno.vender(cantidad, cart);
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Vintage' && model == 2){
            cart = vintageDos.vender(cantidad, cart);
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Vintage' && model == 3){
            cart = vintageTres.vender(cantidad, cart);
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Clasico' && model == 1){
            cart = clasico.vender(cantidad, cart); 
            alert(`llevas gastado ${cart}`)
        } else {
            alert('No tenemos ese modelo');
        }
          return cart;
    
    };
    
    //esta funcion toma el total del carrito y si es mayor o igual a 400 la compra, le da el importe a abonar con descuento. Si no le pasa el importe total
    let calcularTotal = (cart) =>{
        if (cart >= 400){
            cart = cart - cart * 0.2;
            alert(`Total a abonar con descuento ${cart}`);
            } else{
            alert(`Total a abonar ${cart}`);
            }
    }
    
    
    alert('Hola! Aun no manipulamos el DOM... hagamos una compra por aca');
    alert('Compras de mas de $400, por hoy tienen 20% de dto y envio gratis');

    
    //bucle para que se ejecuten los prompt, luego la funcion cart y luego la de calcular total.
    do {
        let keyboard = prompt('Que Keyboard vas a llevar? Vintage/Clasico/Gamer') ;
        let model = prompt('Que modelo?')
        let cantidadAComprar = prompt("cuantos queres?");
        cart = addToCart(keyboard, model, cart, cantidadAComprar);
        respuesta = prompt('Queres sumar otro Keyboard al carrito? si/no');
        if (respuesta === 'no'){
            calcularTotal(cart);
            alert('Hasta luego!');
        }
    } while (respuesta === 'si');
    
    

})