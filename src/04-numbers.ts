(()=> {
  let productPrice = 100;
  productPrice = 110;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  console.log('customerAge', customerAge);

  //Si no inicilizas la variable, el tipo debe ser explicito
  let productInStock: number;

  //NO puedes usar una variable sin asignar
  //console.log('productInStock', productInStock);

  //El tipo de dato reportado es luego del parse
  //*Para recordad: NaN es tipo Number
  let discount = parseInt('op')
  console.log('discount', discount);
  if (discount < 85) {
    console.log('Apply');
  } else {
    console.log('Not Apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b10101; //21
  console.log('bin', bin);

  //El tipo number empieza por minuscula
  const myNumber: number = 22;

})();
