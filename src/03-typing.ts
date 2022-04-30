//Se crea una self-invkoking function para delimitar el alcance de las variables
(() => {
//Tipo string y number por inferencia, también podríamos ponerlos explícitamente
let myProductName = 'Product 1';
let myProductPrice = 100;

//Sugiere metodos dependiendo del tipo
myProductName.toLowerCase();
myProductPrice.toFixed();

//Al ser constante solo puede tener ese valor
const myProductStock = 1000;
})();




