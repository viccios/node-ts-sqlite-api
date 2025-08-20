const productModel = `
  CREATE TABLE IF NOT EXISTS products (
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    amount INTEGER NOT NULL
  );
`;

export { productModel };
