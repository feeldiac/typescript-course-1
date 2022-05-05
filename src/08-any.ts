(()=> {
  //Basicamente desactivamos el chequeo de tipos para esa variable
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //**Se aconseja no utilizarlo, es una regla de fuerza. Si ya el proyecto esta consolidado con tsc
  //*Cuando usarlo. Al empezar a utilizar tsc se podría usar el any, de forma que la migracion sea más sencilla

  //Al ser any, se desactivan las sugerencias de métodos
  myDynamicVar = 'Hello world';
  // myDynamicVar.

  //Casteo de variables | Type Casting | Forma 1
  //Se fuerza a que una variable sea tratado como un tipo en particular
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  //Casteo de variables | Forma 2
  myDynamicVar = 1202;
  const rta2 = (<number>myDynamicVar).toFixed(); //Se relaciona con los genericos
  console.log(rta2);

})();
