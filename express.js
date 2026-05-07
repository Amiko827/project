const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 2500 },
  { id: 2, name: "Phone", price: 1200 },
  { id: 3, name: "Headphones", price: 300 },
];


const users = [
  { username: "admin", password: "1234" },
  { username: "giorgi", password: "pass123" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "პროდუქტი ვერ მოიძებნა",
    });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "შეავსეთ ყველა ველი",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "პროდუქტი წარმატებით დაემატა",
    product: newProduct,
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return res.json({
      message: "Login წარმატებულია",
    });
  }

  res.status(401).json({
    message: "არასწორი username ან password",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});