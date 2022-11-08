(() => {
  const login = (data: { email: string; password: string }) => {
    const { email, password } = data;
    console.log(email, password);
  };

  login({ email: 'email@mail.com', password: '12345678**' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //Product is now a type
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  //Can do the same with an interface
  interface Prod {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'p1',
    createdAt: new Date(2022, 1, 1),
    stock: 55,
  });
  addProduct({
    title: 'p2',
    createdAt: new Date(2020, 8, 1),
    stock: 15,
  });
  addProduct({
    title: 'p3',
    createdAt: new Date(20218, 10, 15),
    stock: 78,
  });
  console.log(products);
})();
