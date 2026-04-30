const express = require("express");
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "mouse", price: 30 },
  { id: 2, name: "keyboard", price: 50 },
  { id: 3, name: "monitor", price: 200 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});