(()=> {
  //type alias. Usa PascalCase
  type UserID = string | number;
  let usedId: UserID;

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log('String', userId.toLowerCase());
    }
  }
  //El editor me indica las opciones validas según el tipo de dato creado
  greeting(22, 'S');

  /*
  A type alias is exactly that - a name for any type.
  */

  //Literal types: solo se pueden tener los valores definidos
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  // shirtSize = 'wjefojwei'; Este valor no esta permitido

  /*
  A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

  here are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.
  */
})
