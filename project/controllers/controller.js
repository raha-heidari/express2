let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return res.status(404).json({ message: "Product not found!" });
  res.status(200).json(product);
};

exports.addProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || !price)
    return res.status(400).json({ message: "Name and price are required!" });

  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1)
    return res.status(404).json({ message: "Product not found!" });

  if (name) products[productIndex].name = name;
  if (price) products[productIndex].price = parseFloat(price);

  res.status(200).json(products[productIndex]);
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1)
    return res.status(404).json({ message: "Product not found!" });

  products.splice(productIndex, 1);
  res.status(200).json({ message: "Product deleted successfully!" });
};
