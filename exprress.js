const express = require("express");

const app = express();

const PORT = 3000;

const products = [
  {
    id: 1,
    category: "Electronics",
    name: "iPhone 15",
    price: 1200,
  },
  {
    id: 2,
    category: "Electronics",
    name: "Samsung TV",
    price: 900,
  },
  {
    id: 3,
    category: "Clothing",
    name: "Nike Hoodie",
    price: 80,
  },
  {
    id: 4,
    category: "Books",
    name: "JavaScript Guide",
    price: 25,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
