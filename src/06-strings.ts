(()=> {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {}

  productTitle = 'My new amazing product';
  console.log('productTitle', productTitle);

  const productDescription = 'Lorem ipsum description';
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;
  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);

  //string en minúscula para especificar el tipo
  const myString : string = 'lorem';

})();
