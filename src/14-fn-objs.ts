(() => {
  const login = (data: { email: string; password: string }) => {
    const { email, password } = data;
    console.log(email, password);
  };

  login({ email: 'email@mail.com', password: '12345678**' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'p1',
    createdAt: new Date(2022, 1, 1),
    stock: 55,
  });
  console.log(products);
  
})();
