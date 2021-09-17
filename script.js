document.addEventListener('DOMContentLoaded', () => {
    alert('Hola! Aun no manipulamos el DOM... hagamos una compra por aca');
    alert('Compras de mas de $400, por hoy tienen 20% de dto y envio gratis');
        
    // acumulador 
    let cart = 0;

    //funciones    
    //Esta funcion deberia ir acumulando / sumando la eleccion del teclado y modelo usuario al carrito
    let addToCart = (keyboard, model) => {
        
        if (keyboard === 'Gamer' && model == 1){
            cart += 199.99 
            alert(`llevas gastado ${cart}`)
        } else if (keyboard === 'Gamer' && model == 2){
            cart += 150 
            alert(`llevas gastado ${cart}`)
        } else if (keyboard === 'Gamer' && model == 3){
            cart += 119.99
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Vintage' && model == 1){
            cart += 319.99 
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Vintage' && model == 2){
            cart += 219.99
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Vintage' && model == 3){
            cart += 189.99 
            alert(`llevas gastado ${cart}`)
        }else if (keyboard === 'Clasico' && model == 1){
            cart += 419.99 
            alert(`llevas gastado ${cart}`)
        } else {
            alert('No tenemos ese modelo');
        }
          return true;
    
    }
    
    //esta funcion toma el total del carrito y si es mayor o igual a 400 la compra, le da el importe a abonar con descuento. Si no le pasa el importe total
    let calcularTotal = (cart) =>{
        if (cart >= 400){
            cart = cart - (cart * 0.2);
            alert(`Total a abonar con descuento ${cart}`)
            } else{
            alert(`Total a abonar ${cart}`)
            }
    }
    
    
    //bucle para que se ejecuten los prompt, luego la funcion cart y luego la de calcular total.
    do {
        let keyboard = prompt('Que Keyboard vas a llevar? Vintage/Clasico/Gamer') ;
        let model = prompt('Que modelo?')
        addToCart(keyboard, model);
        let respuesta = prompt('Queres sumar otro Keyboard al carrito? si/no');
        if (respuesta === 'no'){
            calcularTotal(cart);
            alert('Hasta luego!');
        }
    } while (respuesta === 'si');
    
    
    

    //Objetos 
    class Productos {
        constructor(keyboard, model, price){
            this.keyboard = keyboard;
            this.model = model;
            this.price = number(price);
            this.stock = 10;
        }

        vender (){
            let cantidad = prompt('cuantos queres?')
            if (cantidad>= this.stock){
                alert('tenemos stock');
                
            }else{
                alert('no hay stock suficiente');
            }
        }

    }

    const VintageUno = new Productos (keyboard, model, '$319.99');
    const VintageDos = new Productos (keyboard, model, '$219.99');
    const VintageTres = new Productos (keyboard, model, '$189.99');
    const GamerUno = new Productos (keyboard, model, '$199.99');
    const GamerDos = new Productos (keyboard, model, '$150');
    const GamerTres = new Productos (keyboard, model, '$119.99');
    const Clasico = new Productos (keyboard, model, '$419.99');



})