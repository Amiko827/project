const products = [
  {
    name: "Headphones",
    price: 120,
    discount: 20,
    inStock: true,
  },
  {
    name: "Keyboard",
    price: 80,
    discount: 10,
    inStock: false,
  },
  {
    name: "Mouse",
    price: 40,
    discount: 5,
    inStock: true,
  },
  {
    name: "Monitor",
    price: 300,
    discount: 50,
    inStock: true,
  },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    let finalPrice =
      products[i].price - (products[i].price * products[i].discount) / 100;

    console.log(products[i].name + " available. Final price: " + finalPrice);
  } else {
    console.log(products[i].name + " product is not available");
  }
}
const cart = {
  user: "Ana",
  items: ["Headphones", "Mouse", "Keyboard"],
  prices: [120, 40, 80],
};

for (let i = 0; i < cart.items.length; i++) {
  console.log(cart.user + " is buying " + cart.items[i]);
}

let total = 0;

for (let i = 0; i < cart.prices.length; i++) {
  total += cart.prices[i];
}

console.log("Total price is " + total);
