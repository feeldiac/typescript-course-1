(()=> {
  let prices = [1, 2, 2, 1, 1, 2];

  //Solo podemos ingresarle números
  // prices.push('a');
  // prices.push('true');


  //Puedo crear arrays con varios tipos de datos tambi´ne
  let products = ['a', 'b', 'c', true]; //Acepta strings o boolean

  //Definicion explicita de los tipos de elementos de un array
  let mixedArray: (number | string | boolean | Object)[] = ['Bogota', true];
  mixedArray.push(22);

  //Cuando definimos explicitamente el uso de Object, deja ingresar arrays trambién

  //Los argumentos de una operación aritmética deben ser numbers
  let numbers = [1, 2, 3, 4, 5, 6];
  numbers.map(item => item * 2);

})();
