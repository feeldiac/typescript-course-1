(()=> {
  let userId: string | number;
  userId = 123;
  userId = 'abc';

  function greeting(myText: string | number) {
    //Dependiendo a donde entre se activan las sugerencias de metodos
    if (typeof myText === 'string') {
      console.log(`String: ${myText.toLowerCase()}`);
    } else {
      console.log(`Number: ${myText.toFixed(1)}`);
    }
  }
  greeting('ZYX');
  greeting(987.654);
})();

/* A union type describes a value that can be one of several types.
We use the vertical bar (|) to separate each type, so number | string | boolean
is the type of a value that can be a number, a string, or a boolean. */
